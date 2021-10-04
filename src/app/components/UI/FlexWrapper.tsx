import styled from "styled-components"

type AlignType =
  | "center"
  | "flex-end"
  | "flex-start"
  | "space-between"
  | "space-around"

type FlexWrapperProps = {
  justify?: AlignType
  alignItems?: AlignType
  direction?: "column" | "row" | "row-reverse" | "column-reverse"
  margin?: string
  padding?: string
  maxWidth?: string
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justify ?? "center"};
  align-items: ${(props) => props.justify ?? "center"};
  flex-direction: ${(props) => props.direction ?? "column"};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  max-width: ${(props) => props.maxWidth};
`
