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

export type AllProductType = WheelProductType | TireProductType;

export type CategoryType = {
  __typename?: 'CategoryType';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  thumbnail: Scalars['String'];
  products?: Maybe<Array<Maybe<ProductType>>>;
};



export type PaginatedProductsType = {
  __typename?: 'PaginatedProductsType';
  hasMore?: Maybe<Scalars['Boolean']>;
  results?: Maybe<Array<Maybe<AllProductType>>>;
};

export type ProductType = {
  __typename?: 'ProductType';
  id: Scalars['ID'];
  name: Scalars['String'];
  image: Scalars['String'];
  description: Scalars['String'];
  category: CategoryType;
  createdDate: Scalars['Date'];
  slug: Scalars['String'];
  weight: Scalars['Decimal'];
};

export type Query = {
  __typename?: 'Query';
  getAllProducts?: Maybe<Array<Maybe<AllProductType>>>;
  getProductById?: Maybe<AllProductType>;
  getAllPaginatedProducts?: Maybe<PaginatedProductsType>;
  getAllCategories?: Maybe<Array<Maybe<CategoryType>>>;
  getProductsFromCategory?: Maybe<Array<Maybe<AllProductType>>>;
  getPaginatedProductsFromCategory?: Maybe<PaginatedProductsType>;
};


export type QueryGetProductByIdArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetAllPaginatedProductsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGetProductsFromCategoryArgs = {
  categoryName?: Maybe<Scalars['String']>;
};


export type QueryGetPaginatedProductsFromCategoryArgs = {
  categoryName?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type TireProductType = {
  __typename?: 'TireProductType';
  id: Scalars['ID'];
  name: Scalars['String'];
  image: Scalars['String'];
  description: Scalars['String'];
  category: CategoryType;
  brand?: Maybe<Scalars['String']>;
  createdDate: Scalars['Date'];
  slug: Scalars['String'];
  weight: Scalars['Decimal'];
  baseproductPtr: ProductType;
  variants?: Maybe<Array<Maybe<TireVariantType>>>;
  lowestVariantPrice?: Maybe<Scalars['Decimal']>;
  hasDifferentVariantPricing?: Maybe<Scalars['Boolean']>;
};

/** An enumeration. */
export enum TireProductVariantHeight {
  /** 28 */
  A_28 = 'A_28',
  /** 29 */
  A_29 = 'A_29',
  /** 31 */
  A_31 = 'A_31',
  /** 32 */
  A_32 = 'A_32',
  /** 33 */
  A_33 = 'A_33',
  /** 34 */
  A_34 = 'A_34',
  /** 35 */
  A_35 = 'A_35'
}

/** An enumeration. */
export enum TireProductVariantRimCircumference {
  /** 14 */
  A_14 = 'A_14',
  /** 15 */
  A_15 = 'A_15',
  /** 16 */
  A_16 = 'A_16'
}

/** An enumeration. */
export enum TireProductVariantWidth {
  /** 8 */
  A_8 = 'A_8',
  /** 9 */
  A_9 = 'A_9',
  /** 10 */
  A_10 = 'A_10'
}

export type TireVariantType = {
  __typename?: 'TireVariantType';
  id: Scalars['ID'];
  productCode: Scalars['String'];
  stock: Scalars['Int'];
  unitPrice: Scalars['Decimal'];
  height: TireProductVariantHeight;
  width: TireProductVariantWidth;
  rimCircumference: TireProductVariantRimCircumference;
};

export type WheelProductType = {
  __typename?: 'WheelProductType';
  id: Scalars['ID'];
  name: Scalars['String'];
  image: Scalars['String'];
  description: Scalars['String'];
  category: CategoryType;
  brand?: Maybe<Scalars['String']>;
  createdDate: Scalars['Date'];
  slug: Scalars['String'];
  weight: Scalars['Decimal'];
  baseproductPtr: ProductType;
  variants?: Maybe<Array<Maybe<WheelVariantType>>>;
  lowestVariantPrice?: Maybe<Scalars['Decimal']>;
  hasDifferentVariantPricing?: Maybe<Scalars['Boolean']>;
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

export type GetAllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProductsQuery = (
  { __typename?: 'Query' }
  & { getAllProducts?: Maybe<Array<Maybe<(
    { __typename?: 'WheelProductType' }
    & Pick<WheelProductType, 'name' | 'lowestVariantPrice' | 'brand'>
    & { variants?: Maybe<Array<Maybe<(
      { __typename?: 'WheelVariantType' }
      & Pick<WheelVariantType, 'finish' | 'boltPattern' | 'size'>
    )>>> }
  ) | (
    { __typename?: 'TireProductType' }
    & Pick<TireProductType, 'name' | 'lowestVariantPrice' | 'id' | 'brand'>
    & { variants?: Maybe<Array<Maybe<(
      { __typename?: 'TireVariantType' }
      & Pick<TireVariantType, 'width' | 'productCode' | 'unitPrice' | 'rimCircumference' | 'height'>
    )>>> }
  )>>> }
);

export const CategoryFragmentFragmentDoc = gql`
    fragment CategoryFragment on CategoryType {
  id
  name
  description
  thumbnail
}
    `;
export const GetAllProductsDocument = gql`
    query getAllProducts {
  getAllProducts {
    ... on TireProductType {
      name
      lowestVariantPrice
      id
      brand
      variants {
        width
        productCode
        unitPrice
        rimCircumference
        height
      }
    }
    ... on WheelProductType {
      name
      lowestVariantPrice
      brand
      variants {
        finish
        boltPattern
        size
      }
    }
  }
}
    `;

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
  "possibleTypes": {
    "AllProductType": [
      "WheelProductType",
      "TireProductType"
    ]
  }
};
      export default result;
    