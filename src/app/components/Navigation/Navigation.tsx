import React, { FC } from "react"
import { Link } from "react-router-dom"
import Cart from "src/app/icons/Cart"
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
`

type NavigationProps = {} & NavigationBarProps

export const Navigation: FC<NavigationProps> = ({ height }) => {
  return (
    <NavigationBar height={height}>
      <NavigationContent>
        <FlexWrapper justify="center" alignItems="flex-start" height="100%">
          Links
        </FlexWrapper>
        <FlexWrapper justify="center" alignItems="flex-end">
          <Link to="/cart">
            <Cart />
          </Link>
        </FlexWrapper>
      </NavigationContent>
    </NavigationBar>
  )
}
