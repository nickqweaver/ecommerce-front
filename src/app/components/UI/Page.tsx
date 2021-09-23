import styled from "styled-components"

type PageProps = {
  margin?: string
  padding?: string
}
export const Page = styled.main<PageProps>`
  width: 100vw;
  margin: ${(props) => props.margin ?? "60px 0px"};
  padding: ${(props) => props.padding};
  display: flex;
  justify-content: center;
  flex-direction: column;
`
