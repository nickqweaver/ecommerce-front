import React from "react"
import { ProductTileFragment } from "../../graphql/generated/types"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Card = styled.div`
  padding: 32px 16px;
  background-color: #fff;
  border: 2px solid black;
  display: flex;
`

const Button = styled.button`
  padding: 8px 24px;
  border: none;
  background-color: orange;
  cursor: pointer;
  display: flex;
  justify-content: center;
`

const Image = styled.img`
  width: 200px;
  height: 200px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  height: 100%;
`

export function ProductCard(props: ProductTileFragment) {
  const price = props.hasDifferentVariantPricing
    ? `From $${props.lowestVariantPrice}`
    : `$${props.lowestVariantPrice}`
  return (
    <Card>
      <Image src={props?.image?.url ?? ""} />
      <Container>
        <span>{props.name}</span>
        <span>{price}</span>
        <span>{props.brand}</span>
        <Link to={`/products/${props.slug}`}>
          <Button as="a">Details</Button>
        </Link>
      </Container>
    </Card>
  )
}
