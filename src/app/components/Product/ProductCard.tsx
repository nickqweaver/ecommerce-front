import React, { FC } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Loader from "react-content-loader"
import { ProductTileFragment } from "src/graphql/generated/types"

import { Button } from "../UI/Button"
import { Image } from "../UI/Image"

const Card = styled.div`
  padding: 32px 16px;
  background-color: #fff;
  display: flex;
  box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 6px;
  flex-direction: column;
  align-items: center;
  min-width: 290px;
  max-width: 360px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  height: 100%;
`

const CardText = styled.div`
  display: flex;
  flex-direction: column;
`

const Tag = styled.span<{ isBold?: boolean; color?: string }>`
  font-weight: ${(props) => (props.isBold ? 500 : 300)};
`

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 32px;
`

type ProductCardLoaderProps = {}
export const ProductCardLoader: FC<ProductCardLoaderProps> = (props) => {
  return (
    <Card>
      <Loader speed={2} width={360} height={425} viewBox={`0 0 ${360} ${460}`}>
        <rect x={80} y={0} rx={6} ry={6} width={200} height={200} />
        <rect x={32} y={256} rx={6} ry={6} width={328} height={32} />
        <rect x={32} y={320} rx={6} ry={6} width={80} height={16} />
        <rect x={32} y={352} rx={6} ry={6} width={160} height={16} />
        <rect x={32} y={416} rx={6} ry={6} width={120} height={32} />
      </Loader>
    </Card>
  )
}

export function ProductCard(props: ProductTileFragment) {
  const price = props.hasDifferentVariantPricing
    ? `From $${props.lowestVariantPrice}`
    : `$${props.lowestVariantPrice}`

  return (
    <div>
      <Card>
        <Image width={200} height={200} url={props?.image?.url ?? ""} />
        <Container>
          <CardText>
            <h5 style={{ fontWeight: 500, marginTop: `calc(3rem - 16px)` }}>
              {props.name}
            </h5>
            <Tag className="secondary-font-color">{price}</Tag>
            <Tag isBold>{props.brand}</Tag>
          </CardText>
          <ButtonWrapper>
            <Link
              style={{ textDecoration: "none" }}
              to={`/products/${props.slug}`}
            >
              <Button>Details</Button>
            </Link>
          </ButtonWrapper>
        </Container>
      </Card>
    </div>
  )
}
