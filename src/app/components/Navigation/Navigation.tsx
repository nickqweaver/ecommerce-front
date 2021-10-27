import React, { FC, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext, CartItem } from "src/app/context/cart"
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
  width: calc(100% - 32px);
  height: 100%;
  grid-template-columns: auto auto;
  margin: 0px 16px;
  background-color: #fff;
`

type NavigationProps = {} & NavigationBarProps

export const Navigation: FC<NavigationProps> = ({ height }) => {
  const { state } = useContext(CartContext)

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
            <CartIcon itemCount={getTotalItemCount(state.items)} />
          </Link>
        </FlexWrapper>
      </NavigationContent>
    </NavigationBar>
  )
}
