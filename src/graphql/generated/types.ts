import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
  /** The `Decimal` scalar type represents a python Decimal. */
  Decimal: any;
};

export type CategoryType = {
  __typename?: 'CategoryType';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  thumbnail: Scalars['String'];
  products?: Maybe<Array<Maybe<ProductType>>>;
};



export type ProductOption = {
  __typename?: 'ProductOption';
  optionCategory?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ProductType = {
  __typename?: 'ProductType';
  id: Scalars['ID'];
  sku: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Decimal'];
  description: Scalars['String'];
  weight: Scalars['Decimal'];
  image: Scalars['String'];
  thumbnail: Scalars['String'];
  createdDate: Scalars['Date'];
  category: CategoryType;
  stock: Scalars['Int'];
  productOptions?: Maybe<Array<Maybe<ProductOption>>>;
};

export type Query = {
  __typename?: 'Query';
  getAllCategoryNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  getAllCategories?: Maybe<Array<Maybe<CategoryType>>>;
  getProductsFromCategory?: Maybe<Array<Maybe<ProductType>>>;
  getAllProducts?: Maybe<Array<Maybe<ProductType>>>;
  getProductById?: Maybe<ProductType>;
};


export type QueryGetProductsFromCategoryArgs = {
  categoryName?: Maybe<Scalars['String']>;
};


export type QueryGetProductByIdArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type CategoryFragmentFragment = (
  { __typename?: 'CategoryType' }
  & Pick<CategoryType, 'id' | 'name' | 'description' | 'thumbnail'>
);

export type ProductTileFragmentFragment = (
  { __typename?: 'ProductType' }
  & Pick<ProductType, 'name' | 'price' | 'thumbnail' | 'id'>
);

export type ProductFragmentFragment = (
  { __typename?: 'ProductType' }
  & Pick<ProductType, 'id' | 'name' | 'price' | 'sku' | 'description' | 'weight' | 'image' | 'thumbnail' | 'createdDate' | 'stock'>
  & { category: (
    { __typename?: 'CategoryType' }
    & CategoryFragmentFragment
  ), productOptions?: Maybe<Array<Maybe<(
    { __typename?: 'ProductOption' }
    & Pick<ProductOption, 'options' | 'optionCategory'>
  )>>> }
);

export type GetAllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProductsQuery = (
  { __typename?: 'Query' }
  & { getAllProducts?: Maybe<Array<Maybe<(
    { __typename?: 'ProductType' }
    & ProductFragmentFragment
  )>>> }
);

export const ProductTileFragmentFragmentDoc = gql`
    fragment ProductTileFragment on ProductType {
  name
  price
  thumbnail
  id
}
    `;
export const CategoryFragmentFragmentDoc = gql`
    fragment CategoryFragment on CategoryType {
  id
  name
  description
  thumbnail
}
    `;
export const ProductFragmentFragmentDoc = gql`
    fragment ProductFragment on ProductType {
  id
  name
  price
  sku
  description
  weight
  image
  thumbnail
  createdDate
  category {
    ...CategoryFragment
  }
  stock
  productOptions {
    options
    optionCategory
  }
}
    ${CategoryFragmentFragmentDoc}`;
export const GetAllProductsDocument = gql`
    query getAllProducts {
  getAllProducts {
    ...ProductFragment
  }
}
    ${ProductFragmentFragmentDoc}`;

/**
 * __useGetAllProductsQuery__
 *
 * To run a query within a React component, call `useGetAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
        return Apollo.useQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, baseOptions);
      }
export function useGetAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
          return Apollo.useLazyQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, baseOptions);
        }
export type GetAllProductsQueryHookResult = ReturnType<typeof useGetAllProductsQuery>;
export type GetAllProductsLazyQueryHookResult = ReturnType<typeof useGetAllProductsLazyQuery>;
export type GetAllProductsQueryResult = Apollo.QueryResult<GetAllProductsQuery, GetAllProductsQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    