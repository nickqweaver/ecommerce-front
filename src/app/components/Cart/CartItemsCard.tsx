import React, { FC } from "react"
import styled from "styled-components"
import { Card } from "../Product/ProductCard"

const Separator = styled.hr`
  width: 100%;
  border-color: var(--foreground-color);
  margin: var(--space-x2) 0px;
`

export const CartItemsCard: FC<{}> = ({ children }) => {
  const childrenArray = React.Children.toArray(children)
  return (
    <Card style={{ minWidth: "360px" }}>
      <p
        style={{
          fontWeight: 300,
          textAlign: "left",
          width: "100%",
        }}
      >
        Your Order
      </p>
      <Separator />
      {childrenArray.map((child, index) => {
        return (
          <>
            {child} {index < childrenArray.length - 1 && <Separator />}
          </>
        )
      })}
    </Card>
  )
}
