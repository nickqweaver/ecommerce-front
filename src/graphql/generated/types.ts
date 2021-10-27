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
  products: Array<BaseProductType>;
};

export type CloudinaryImageType = {
  __typename?: 'CloudinaryImageType';
  id: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type CreateOrder = {
  __typename?: 'CreateOrder';
  status?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  orderItems?: Maybe<Array<OrderItemResponseType>>;
};



export type Mutation = {
  __typename?: 'Mutation';
  createOrder?: Maybe<CreateOrder>;
};


export type MutationCreateOrderArgs = {
  orderItems?: Maybe<Array<Maybe<OrderItemInput>>>;
};

export type OrderItemInput = {
  productId?: Maybe<Scalars['String']>;
  variantId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type OrderItemResponseType = {
  __typename?: 'OrderItemResponseType';
  productVariation?: Maybe<AllVariantsType>;
  status?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  image?: Maybe<CloudinaryImageType>;
};

export type PaginatedProductIdsType = {
  __typename?: 'PaginatedProductIdsType';
  hasMore?: Maybe<Scalars['Boolean']>;
  results?: Maybe<Array<Scalars['ID']>>;
};

export type PaginatedProductsType = {
  __typename?: 'PaginatedProductsType';
  hasMore?: Maybe<Scalars['Boolean']>;
  results?: Maybe<Array<ProductType>>;
};

export type ProductType = {
  __typename?: 'ProductType';
  name: Scalars['String'];
  id: Scalars['ID'];
  image: CloudinaryImageType;
  description: Scalars['String'];
  category: CategoryType;
  createdDate: Scalars['Date'];
  slug: Scalars['String'];
  weight: Scalars['Decimal'];
  variants: Array<AllVariantsType>;
  brand: Scalars['String'];
  lowestVariantPrice: Scalars['Decimal'];
  hasDifferentVariantPricing: Scalars['Boolean'];
  variationOptions?: Maybe<Array<VariationOptionType>>;
};

export type Query = {
  __typename?: 'Query';
  getVariantById?: Maybe<AllVariantsType>;
  getAllProducts?: Maybe<Array<Maybe<ProductType>>>;
  getProductById?: Maybe<ProductType>;
  getAllPaginatedProducts?: Maybe<PaginatedProductsType>;
  getProductBySlug?: Maybe<ProductType>;
  getAllCategories?: Maybe<Array<Maybe<CategoryType>>>;
  getProductIdsFromCategory?: Maybe<Array<Maybe<Scalars['ID']>>>;
  getPaginatedProductIdsFromCategory?: Maybe<PaginatedProductIdsType>;
};


export type QueryGetVariantByIdArgs = {
  productId?: Maybe<Scalars['ID']>;
  variantId?: Maybe<Scalars['ID']>;
};


export type QueryGetProductByIdArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetAllPaginatedProductsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGetProductBySlugArgs = {
  slug?: Maybe<Scalars['String']>;
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

export type VariationOptionType = {
  __typename?: 'VariationOptionType';
  label: Scalars['String'];
  options?: Maybe<Array<Scalars['String']>>;
};

export type WheelVariantType = {
  __typename?: 'WheelVariantType';
  id: Scalars['ID'];
  productCode: Scalars['String'];
  stock: Scalars['Int'];
  unitPrice: Scalars['Decimal'];
  size: Scalars['String'];
  boltPattern: Scalars['String'];
};

export type CategoryFragment = (
  { __typename?: 'CategoryType' }
  & Pick<CategoryType, 'id' | 'name'>
);

export type ImageFragment = (
  { __typename?: 'CloudinaryImageType' }
  & Pick<CloudinaryImageType, 'url' | 'type' | 'format' | 'id'>
);

export type ProductFragment = (
  { __typename?: 'ProductType' }
  & Pick<ProductType, 'name' | 'id' | 'description' | 'createdDate' | 'slug' | 'weight' | 'brand' | 'lowestVariantPrice' | 'hasDifferentVariantPricing'>
  & { variationOptions?: Maybe<Array<(
    { __typename?: 'VariationOptionType' }
    & Pick<VariationOptionType, 'label' | 'options'>
  )>>, image: (
    { __typename?: 'CloudinaryImageType' }
    & ImageFragment
  ), category: (
    { __typename?: 'CategoryType' }
    & CategoryFragment
  ), variants: Array<(
    { __typename?: 'WheelVariantType' }
    & WheelVariantFragment
  ) | (
    { __typename?: 'TireVariantType' }
    & TireVariantFragment
  )> }
);

export type ProductTileFragment = (
  { __typename?: 'ProductType' }
  & Pick<ProductType, 'name' | 'id' | 'description' | 'brand' | 'hasDifferentVariantPricing' | 'lowestVariantPrice' | 'slug'>
  & { image: (
    { __typename?: 'CloudinaryImageType' }
    & ImageFragment
  ) }
);

export type WheelVariantFragment = (
  { __typename?: 'WheelVariantType' }
  & Pick<WheelVariantType, 'id' | 'productCode' | 'stock' | 'unitPrice' | 'size' | 'boltPattern'>
);

export type TireVariantFragment = (
  { __typename?: 'TireVariantType' }
  & Pick<TireVariantType, 'id' | 'productCode' | 'stock' | 'unitPrice' | 'height' | 'width' | 'rimCircumference'>
);

export type CreateOrderMutationVariables = Exact<{
  orderItems?: Maybe<Array<Maybe<OrderItemInput>> | Maybe<OrderItemInput>>;
}>;


export type CreateOrderMutation = (
  { __typename?: 'Mutation' }
  & { createOrder?: Maybe<(
    { __typename?: 'CreateOrder' }
    & Pick<CreateOrder, 'id' | 'status' | 'message'>
    & { orderItems?: Maybe<Array<(
      { __typename?: 'OrderItemResponseType' }
      & Pick<OrderItemResponseType, 'status' | 'message'>
      & { productVariation?: Maybe<(
        { __typename?: 'WheelVariantType' }
        & WheelVariantFragment
      ) | (
        { __typename?: 'TireVariantType' }
        & TireVariantFragment
      )> }
    )>> }
  )> }
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
    & { results?: Maybe<Array<(
      { __typename?: 'ProductType' }
      & ProductTileFragment
    )>> }
  )> }
);

export type GetProductBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetProductBySlugQuery = (
  { __typename?: 'Query' }
  & { getProductBySlug?: Maybe<(
    { __typename?: 'ProductType' }
    & ProductFragment
  )> }
);

export type GetProductByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductByIdQuery = (
  { __typename?: 'Query' }
  & { getProductById?: Maybe<(
    { __typename?: 'ProductType' }
    & ProductFragment
  )> }
);

export type GetVariantByIdQueryVariables = Exact<{
  productId: Scalars['ID'];
  variantId: Scalars['ID'];
}>;


export type GetVariantByIdQuery = (
  { __typename?: 'Query' }
  & { getVariantById?: Maybe<(
    { __typename?: 'WheelVariantType' }
    & WheelVariantFragment
  ) | (
    { __typename?: 'TireVariantType' }
    & TireVariantFragment
  )> }
);

export const ImageFragmentDoc = gql`
    fragment Image on CloudinaryImageType {
  url
  type
  format
  id
}
    `;
export const CategoryFragmentDoc = gql`
    fragment Category on CategoryType {
  id
  name
}
    `;
export const WheelVariantFragmentDoc = gql`
    fragment WheelVariant on WheelVariantType {
  id
  productCode
  stock
  unitPrice
  size
  boltPattern
}
    `;
export const TireVariantFragmentDoc = gql`
    fragment TireVariant on TireVariantType {
  id
  productCode
  stock
  unitPrice
  height
  width
  rimCircumference
}
    `;
export const ProductFragmentDoc = gql`
    fragment Product on ProductType {
  variationOptions {
    label
    options
  }
  name
  id
  image {
    ...Image
  }
  description
  category {
    ...Category
  }
  createdDate
  slug
  weight
  variants {
    ...WheelVariant
    ...TireVariant
  }
  brand
  lowestVariantPrice
  hasDifferentVariantPricing
}
    ${ImageFragmentDoc}
${CategoryFragmentDoc}
${WheelVariantFragmentDoc}
${TireVariantFragmentDoc}`;
export const ProductTileFragmentDoc = gql`
    fragment ProductTile on ProductType {
  name
  id
  description
  brand
  hasDifferentVariantPricing
  lowestVariantPrice
  image {
    ...Image
  }
  slug
}
    ${ImageFragmentDoc}`;
export const CreateOrderDocument = gql`
    mutation createOrder($orderItems: [OrderItemInput]) {
  createOrder(orderItems: $orderItems) {
    id
    status
    message
    orderItems {
      productVariation {
        ...WheelVariant
        ...TireVariant
      }
      status
      message
    }
  }
}
    ${WheelVariantFragmentDoc}
${TireVariantFragmentDoc}`;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      orderItems: // value for 'orderItems'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, baseOptions);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const GetAllProductTilesDocument = gql`
    query getAllProductTiles($offset: Int!, $limit: Int!) {
  getAllPaginatedProducts(offset: $offset, limit: $limit) {
    hasMore
    results {
      ...ProductTile
    }
  }
}
    ${ProductTileFragmentDoc}`;

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
export const GetProductBySlugDocument = gql`
    query getProductBySlug($slug: String!) {
  getProductBySlug(slug: $slug) {
    ...Product
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useGetProductBySlugQuery__
 *
 * To run a query within a React component, call `useGetProductBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetProductBySlugQuery(baseOptions: Apollo.QueryHookOptions<GetProductBySlugQuery, GetProductBySlugQueryVariables>) {
        return Apollo.useQuery<GetProductBySlugQuery, GetProductBySlugQueryVariables>(GetProductBySlugDocument, baseOptions);
      }
export function useGetProductBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductBySlugQuery, GetProductBySlugQueryVariables>) {
          return Apollo.useLazyQuery<GetProductBySlugQuery, GetProductBySlugQueryVariables>(GetProductBySlugDocument, baseOptions);
        }
export type GetProductBySlugQueryHookResult = ReturnType<typeof useGetProductBySlugQuery>;
export type GetProductBySlugLazyQueryHookResult = ReturnType<typeof useGetProductBySlugLazyQuery>;
export type GetProductBySlugQueryResult = Apollo.QueryResult<GetProductBySlugQuery, GetProductBySlugQueryVariables>;
export const GetProductByIdDocument = gql`
    query getProductById($id: ID!) {
  getProductById(id: $id) {
    ...Product
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useGetProductByIdQuery__
 *
 * To run a query within a React component, call `useGetProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductByIdQuery(baseOptions: Apollo.QueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>) {
        return Apollo.useQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(GetProductByIdDocument, baseOptions);
      }
export function useGetProductByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>) {
          return Apollo.useLazyQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(GetProductByIdDocument, baseOptions);
        }
export type GetProductByIdQueryHookResult = ReturnType<typeof useGetProductByIdQuery>;
export type GetProductByIdLazyQueryHookResult = ReturnType<typeof useGetProductByIdLazyQuery>;
export type GetProductByIdQueryResult = Apollo.QueryResult<GetProductByIdQuery, GetProductByIdQueryVariables>;
export const GetVariantByIdDocument = gql`
    query getVariantById($productId: ID!, $variantId: ID!) {
  getVariantById(productId: $productId, variantId: $variantId) {
    ... on WheelVariantType {
      ...WheelVariant
    }
    ... on TireVariantType {
      ...TireVariant
    }
  }
}
    ${WheelVariantFragmentDoc}
${TireVariantFragmentDoc}`;

/**
 * __useGetVariantByIdQuery__
 *
 * To run a query within a React component, call `useGetVariantByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVariantByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVariantByIdQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *      variantId: // value for 'variantId'
 *   },
 * });
 */
export function useGetVariantByIdQuery(baseOptions: Apollo.QueryHookOptions<GetVariantByIdQuery, GetVariantByIdQueryVariables>) {
        return Apollo.useQuery<GetVariantByIdQuery, GetVariantByIdQueryVariables>(GetVariantByIdDocument, baseOptions);
      }
export function useGetVariantByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVariantByIdQuery, GetVariantByIdQueryVariables>) {
          return Apollo.useLazyQuery<GetVariantByIdQuery, GetVariantByIdQueryVariables>(GetVariantByIdDocument, baseOptions);
        }
export type GetVariantByIdQueryHookResult = ReturnType<typeof useGetVariantByIdQuery>;
export type GetVariantByIdLazyQueryHookResult = ReturnType<typeof useGetVariantByIdLazyQuery>;
export type GetVariantByIdQueryResult = Apollo.QueryResult<GetVariantByIdQuery, GetVariantByIdQueryVariables>;

      export type PossibleTypesResultData = {
  "possibleTypes": {
    "AllVariantsType": [
      "WheelVariantType",
      "TireVariantType"
    ]
  }
};
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "AllVariantsType": [
      "WheelVariantType",
      "TireVariantType"
    ]
  }
};
      export default result;
    