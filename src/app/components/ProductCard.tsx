import React from "react"
import { ProductTileFragment } from "../../graphql/generated/types"
import styled from "styled-components"
import { resolveImageUrl } from "../../utils/resolveImageUrl"

const Card = styled.div`
  padding: 32px 16px;
  background-color: #fff;
  border: 2px solid black;
`

const Button = styled.button`
  padding: 8px 24px;
  border: none;
  background-color: orange;
`

const Image = styled.img`
  width: 200px;
  height: 200px;
`

export function ProductCard(props: ProductTileFragment) {
  const price = props.hasDifferentVariantPricing
    ? `From ${props.lowestVariantPrice}`
    : `${props.lowestVariantPrice}`
  return (
    <Card>
      <Image src={resolveImageUrl(props.image ?? "")} />
      <span>{props.name}</span>
      <span>{price}</span>
      <Button as="a">Details</Button>
      <span>{props.brand}</span>
    </Card>
  )
}
