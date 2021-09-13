import { gql } from "@apollo/client"

export const Image = gql`
  fragment Image on CloudinaryImageType {
    url
    type
    format
    id
  }
`
