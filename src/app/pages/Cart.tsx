import React from "react"
import styled from "styled-components"
import { CartItem } from "../components/Cart/CartItem"
import { CartItemsCard } from "../components/Cart/CartItemsCard"
import { Card } from "../components/Product/ProductCard"
import { FlexWrapper } from "../components/UI/FlexWrapper"
import { Page } from "../components/UI/Page"
import { useCart } from "../hooks/useCart"

export const Cart = () => {
  const { cart } = useCart()

  return (
    <Page
      backgroundColor="var(--foreground-color)"
      style={{ minHeight: "calc(100vh - 60px)", display: "block" }}
      padding="var(--space-x4) var(--space-x3)"
      margin="0px"
    >
      <h1>Shopping Cart</h1>
      <FlexWrapper direction="row" justify="space-between">
        <Card
          style={{
            width: "100%",
            maxWidth: "unset",
            marginRight: "var(--space-x4)",
          }}
        ></Card>
        <CartItemsCard>
          {cart.items.map((item) => {
            if (
              item.productId &&
              item.variantId &&
              item.quantity &&
              item.quantity > 0
            ) {
              return (
                <CartItem
                  quantity={item.quantity}
                  variantId={item.variantId}
                  productId={item.productId}
                />
              )
            }
            return <></>
          })}
          <h4
            style={{
              margin: "var(--space-x2) 0px 0px 0px",
              textAlign: "left",
              fontWeight: 300,
            }}
          >
            Total ${cart.total}
          </h4>
        </CartItemsCard>
      </FlexWrapper>
    </Page>
  )
}
