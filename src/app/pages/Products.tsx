import React, { useState, useEffect } from "react"
import styled from "styled-components"
import {
  useGetAllProductTilesLazyQuery,
  useGetAllProductTilesQuery,
  useGetVariantByIdLazyQuery,
} from "../../graphql/generated/types"
import { Button } from "../components/Button"
import { FlexWrapper } from "../components/FlexWrapper"
import { Page } from "../components/Page"
import { ProductCard, ProductCardLoader } from "../components/ProductCard"

const PAGINATION_INCREMENT = 1

interface ProductsProps {}

type GridProps = {
  maxWidth?: number
  gap?: number
  columnSize: number
  rowSize: number
  isDense: boolean
}

const Grid = styled.div<GridProps>`
  display: grid;
  gap: 16px;
  max-width: ${(props) => props.maxWidth}px;
  width: 100%;
  grid-gap: ${(props) => props.gap}px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => props.columnSize}px, 1fr)
  );
  grid-auto-rows: minmax(${(props) => props.rowSize}px, auto);
  grid-auto-flow: ${(props) => (props.isDense ? "dense" : "row")};
`

export function Products(props: ProductsProps) {
  const [pagination, setPagination] = useState({
    offset: 0,
    limit: PAGINATION_INCREMENT,
  })
  const [prod, setProd] = useState<any[]>([]) // TODO fix any types

  const [getProducts, { data, loading: isLoading, error }] =
    useGetAllProductTilesLazyQuery({
      onCompleted: (products) => {
        if (products.getAllPaginatedProducts?.results) {
          setProd([...prod, ...products.getAllPaginatedProducts?.results])
        }
      },
    })

  useEffect(() => {
    getProducts({
      variables: { offset: pagination.offset, limit: pagination.limit },
    })
  }, []) //eslint-disable-line

  if (error) {
    return <div>An error occured</div>
  }

  const loadingItems = Array.from(Array(PAGINATION_INCREMENT).keys())

  return (
    <Page>
      <Grid columnSize={320} rowSize={460} gap={16} isDense>
        {prod.map((product: any) => (
          <FlexWrapper>
            <ProductCard key={product.id} {...product} />
          </FlexWrapper>
        ))}
        {isLoading && loadingItems.map((_item) => <ProductCardLoader />)}
      </Grid>
      <FlexWrapper margin="64px 0px">
        <Button
          onClick={() => {
            const offset = pagination.offset + 1
            const limit = pagination.limit + 1
            if (data?.getAllPaginatedProducts?.hasMore) {
              getProducts({
                variables: {
                  offset,
                  limit,
                },
              })
              setPagination({
                limit,
                offset,
              })
            }
          }}
        >
          View More
        </Button>
      </FlexWrapper>
    </Page>
  )
}
