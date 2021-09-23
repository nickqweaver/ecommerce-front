import styled from "styled-components"

type ImageProps = {
  url: string
  width: number
  height: number
}
export const Image = styled.div<ImageProps>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  background: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`
