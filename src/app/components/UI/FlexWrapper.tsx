import styled from "styled-components"

type AlignType =
  | "center"
  | "flex-end"
  | "flex-start"
  | "space-between"
  | "space-around"

type FlexWrapperProps = {
  position?: "relative" | "absolute" | "fixed"
  justify?: AlignType
  alignItems?: AlignType
  direction?: "column" | "row" | "row-reverse" | "column-reverse"
  margin?: string
  padding?: string
  maxWidth?: string
  height?: string
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justify ?? "center"};
  align-items: ${(props) => props.alignItems ?? "center"};
  flex-direction: ${(props) => props.direction ?? "column"};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
  position: ${(props) => props.position};
`
