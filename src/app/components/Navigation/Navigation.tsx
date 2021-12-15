import React, { FC } from "react"
import { Link } from "react-router-dom"
import { CartItem } from "src/app/context/cart"
import { useCart } from "src/app/hooks/useCart"
import CartIcon from "src/app/icons/CartIcon"
import styled from "styled-components"
import { FlexWrapper } from "../UI/FlexWrapper"

type NavigationBarProps = {
  height: number
}
const NavigationBar = styled.nav<NavigationBarProps>`
  position: fixed;
  top: 0px;
  width: 100vw;
  height: ${(props) => `${props.height}px`};
  box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.08);
`

const NavigationContent = styled.div`
  display: grid;
  width: calc(100% - var(--space-x4));
  height: 100%;
  grid-template-columns: auto auto;
  margin: var(--space-x0) var(--space-x2);
  background-color: #fff;
`

type NavigationProps = {} & NavigationBarProps

export const Navigation: FC<NavigationProps> = ({ height }) => {
  const { cart } = useCart()
  const getTotalItemCount = (items: CartItem[]): number => {
    return items.reduce<number>(
      (previousValue, currentValue) =>
        previousValue + (currentValue.quantity ?? 0),
      0
    )
  }
  return (
    <NavigationBar height={height}>
      <NavigationContent>
        <FlexWrapper justify="center" alignItems="flex-start" height="100%">
          Links
        </FlexWrapper>
        <FlexWrapper justify="center" alignItems="flex-end">
          <Link
            to="/cart"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <CartIcon itemCount={getTotalItemCount(cart.items)} />
          </Link>
        </FlexWrapper>
      </NavigationContent>
    </NavigationBar>
  )
}
