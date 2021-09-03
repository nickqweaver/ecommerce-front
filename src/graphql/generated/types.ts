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

export type AllVariantsType = WheelVariantType | TireVariantType;

export type BaseProductType = {
  __typename?: 'BaseProductType';
  id: Scalars['ID'];
  name: Scalars['String'];
  image: Scalars['String'];
  description: Scalars['String'];
  category: CategoryType;
  createdDate: Scalars['Date'];
  slug: Scalars['String'];
  weight: Scalars['Decimal'];
};

export type CategoryType = {
  __typename?: 'CategoryType';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  thumbnail: Scalars['String'];
  products: Array<BaseProductType>;
};



export type PaginatedProductIdsType = {
  __typename?: 'PaginatedProductIdsType';
  hasMore?: Maybe<Scalars['Boolean']>;
  results?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type PaginatedProductsType = {
  __typename?: 'PaginatedProductsType';
  hasMore?: Maybe<Scalars['Boolean']>;
  results?: Maybe<Array<Maybe<ProductType>>>;
};

export type ProductType = {
  __typename?: 'ProductType';
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  category?: Maybe<CategoryType>;
  createdDate?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Decimal']>;
  variants?: Maybe<Array<Maybe<AllVariantsType>>>;
  brand?: Maybe<Scalars['String']>;
  lowestVariantPrice?: Maybe<Scalars['Decimal']>;
  hasDifferentVariantPricing?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  getAllProducts?: Maybe<Array<Maybe<ProductType>>>;
  getProductById?: Maybe<ProductType>;
  getAllPaginatedProducts?: Maybe<PaginatedProductsType>;
  getAllCategories?: Maybe<Array<Maybe<CategoryType>>>;
  getProductIdsFromCategory?: Maybe<Array<Maybe<Scalars['ID']>>>;
  getPaginatedProductIdsFromCategory?: Maybe<PaginatedProductIdsType>;
};


export type QueryGetProductByIdArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetAllPaginatedProductsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGetProductIdsFromCategoryArgs = {
  categoryName?: Maybe<Scalars['String']>;
};


export type QueryGetPaginatedProductIdsFromCategoryArgs = {
  categoryName?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type TireVariantType = {
  __typename?: 'TireVariantType';
  id: Scalars['ID'];
  productCode: Scalars['String'];
  stock: Scalars['Int'];
  unitPrice: Scalars['Decimal'];
  height: Scalars['Int'];
  width: Scalars['Int'];
  rimCircumference: Scalars['Int'];
};

export type WheelVariantType = {
  __typename?: 'WheelVariantType';
  id: Scalars['ID'];
  productCode: Scalars['String'];
  stock: Scalars['Int'];
  unitPrice: Scalars['Decimal'];
  size: Scalars['String'];
  boltPattern: Scalars['String'];
  finish: Scalars['String'];
};

export type CategoryFragmentFragment = (
  { __typename?: 'CategoryType' }
  & Pick<CategoryType, 'id' | 'name' | 'description' | 'thumbnail'>
);

export type ProductFragmentFragment = (
  { __typename?: 'ProductType' }
  & Pick<ProductType, 'name' | 'id' | 'image' | 'description' | 'createdDate' | 'slug' | 'weight' | 'brand' | 'lowestVariantPrice' | 'hasDifferentVariantPricing'>
  & { category?: Maybe<(
    { __typename?: 'CategoryType' }
    & CategoryFragmentFragment
  )>, variants?: Maybe<Array<Maybe<(
    { __typename?: 'WheelVariantType' }
    & WheelVariantFragmentFragment
  ) | (
    { __typename?: 'TireVariantType' }
    & TireVariantFragmentFragment
  )>>> }
);

export type ProductTileFragmentFragment = (
  { __typename?: 'ProductType' }
  & Pick<ProductType, 'name' | 'id' | 'description' | 'brand' | 'hasDifferentVariantPricing' | 'lowestVariantPrice'>
);

export type WheelVariantFragmentFragment = (
  { __typename?: 'WheelVariantType' }
  & Pick<WheelVariantType, 'id' | 'productCode' | 'stock' | 'unitPrice' | 'size' | 'boltPattern' | 'finish'>
);

export type TireVariantFragmentFragment = (
  { __typename?: 'TireVariantType' }
  & Pick<TireVariantType, 'id' | 'productCode' | 'stock' | 'unitPrice' | 'height' | 'width' | 'rimCircumference'>
);

export type GetAllProductTilesQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type GetAllProductTilesQuery = (
  { __typename?: 'Query' }
  & { getAllPaginatedProducts?: Maybe<(
    { __typename?: 'PaginatedProductsType' }
    & Pick<PaginatedProductsType, 'hasMore'>
    & { results?: Maybe<Array<Maybe<(
      { __typename?: 'ProductType' }
      & ProductTileFragmentFragment
    )>>> }
  )> }
);

export const CategoryFragmentFragmentDoc = gql`
    fragment CategoryFragment on CategoryType {
  id
  name
  description
  thumbnail
}
    `;
export const WheelVariantFragmentFragmentDoc = gql`
    fragment WheelVariantFragment on WheelVariantType {
  id
  productCode
  stock
  unitPrice
  size
  boltPattern
  finish
}
    `;
export const TireVariantFragmentFragmentDoc = gql`
    fragment TireVariantFragment on TireVariantType {
  id
  productCode
  stock
  unitPrice
  height
  width
  rimCircumference
}
    `;
export const ProductFragmentFragmentDoc = gql`
    fragment ProductFragment on ProductType {
  name
  id
  image
  description
  category {
    ...CategoryFragment
  }
  createdDate
  slug
  weight
  variants {
    ...WheelVariantFragment
    ...TireVariantFragment
  }
  brand
  lowestVariantPrice
  hasDifferentVariantPricing
}
    ${CategoryFragmentFragmentDoc}
${WheelVariantFragmentFragmentDoc}
${TireVariantFragmentFragmentDoc}`;
export const ProductTileFragmentFragmentDoc = gql`
    fragment ProductTileFragment on ProductType {
  name
  id
  description
  brand
  hasDifferentVariantPricing
  lowestVariantPrice
}
    `;
export const GetAllProductTilesDocument = gql`
    query getAllProductTiles($offset: Int!, $limit: Int!) {
  getAllPaginatedProducts(offset: $offset, limit: $limit) {
    hasMore
    results {
      ...ProductTileFragment
    }
  }
}
    ${ProductTileFragmentFragmentDoc}`;

/**
 * __useGetAllProductTilesQuery__
 *
 * To run a query within a React component, call `useGetAllProductTilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductTilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductTilesQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetAllProductTilesQuery(baseOptions: Apollo.QueryHookOptions<GetAllProductTilesQuery, GetAllProductTilesQueryVariables>) {
        return Apollo.useQuery<GetAllProductTilesQuery, GetAllProductTilesQueryVariables>(GetAllProductTilesDocument, baseOptions);
      }
export function useGetAllProductTilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductTilesQuery, GetAllProductTilesQueryVariables>) {
          return Apollo.useLazyQuery<GetAllProductTilesQuery, GetAllProductTilesQueryVariables>(GetAllProductTilesDocument, baseOptions);
        }
export type GetAllProductTilesQueryHookResult = ReturnType<typeof useGetAllProductTilesQuery>;
export type GetAllProductTilesLazyQueryHookResult = ReturnType<typeof useGetAllProductTilesLazyQuery>;
export type GetAllProductTilesQueryResult = Apollo.QueryResult<GetAllProductTilesQuery, GetAllProductTilesQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "AllVariantsType": [
      "WheelVariantType",
      "TireVariantType"
    ]
  }
};
      export default result;
    