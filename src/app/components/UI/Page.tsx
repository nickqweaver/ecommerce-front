import styled from "styled-components"

type PageProps = {
  margin?: string
  padding?: string
  flexDirection?: "column" | "row"
  backgroundColor?: string
  height?: string
}
export const Page = styled.main<PageProps>`
  width: 100vw;
  height: ${(props) => props.height};
  margin: ${(props) => props.margin ?? "60px 0px"};
  padding: ${(props) => props.padding};
  display: flex;
  justify-content: center;
  flex-direction: ${(props) => props.flexDirection ?? "column"};
  background-color: ${(props) => props.backgroundColor};
`
