import React from "react"
import { useParams } from "react-router-dom"
import { useGetProductBySlugQuery } from "../../graphql/generated/types"

export function Product() {
  let { slug } = useParams<{ slug: string }>()

  const {
    data,
    loading: isLoading,
    error,
  } = useGetProductBySlugQuery({
    variables: { slug },
  })
  // Query by slug to get product info
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>There was an error</div>
  }
  return <div>{data?.getProductBySlug?.name}</div>
}
