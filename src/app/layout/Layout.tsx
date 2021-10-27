import React, { FC } from "react"
import styled from "styled-components"
import { Navigation } from "../components/Navigation/Navigation"

const LayoutWrapper = styled.main<{ yOffset: number }>`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: ${(props) => `${props.yOffset}px`};
`
export const Layout: FC<{}> = ({ children }) => {
  const navHeight = 60
  return (
    <LayoutWrapper yOffset={navHeight}>
      <Navigation height={navHeight} />
      {children}
    </LayoutWrapper>
  )
}
