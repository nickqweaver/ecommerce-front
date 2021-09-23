import styled from "styled-components"

type AlignType = "center" | "flex-end" | "flex-start"

type FlexWrapperProps = {
  justify?: AlignType
  alignItems?: AlignType
  margin?: string
  padding?: string
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justify ?? "center"};
  align-items: ${(props) => props.justify ?? "center"};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`
