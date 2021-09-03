import { gql } from "@apollo/client";

export const CategoryFragment = gql`
  fragment CategoryFragment on CategoryType {
    id
    name
    description
    thumbnail
  }
`;
