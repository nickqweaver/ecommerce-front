import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import jwt_decode, { JwtPayload } from 'jwt-decode'

const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql',
})

const authLink = setContext((_, { headers }) => {
  let token = sessionStorage.getItem('token') ?? ''
  const payload = token ? jwt_decode<JwtPayload>(token) : undefined
  const expiredAt = payload?.exp ? payload.exp * 1000 : 0
  if (Date.now() >= expiredAt) {
    // https://www.apollographql.com/docs/react/api/link/apollo-link-context/
    token = ''
    // Need to figure out how often we plan to refresh the token
  }

  if (token) {
    return {
      headers: {
        ...headers,
        authorization: token ? `JWT ${token}` : '',
      },
    }
  }

  return {
    headers: {
      ...headers,
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
