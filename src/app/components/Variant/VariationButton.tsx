import styled from "styled-components"

type VariationButtonProps = {
  isSelected: boolean
  margin?: string
}

export const VariationButton = styled.button<VariationButtonProps>`
  padding: 8px 16px;
  border: ${(props) =>
    props.isSelected ? "2px solid #00ff55" : "2px solid #e8e8e8"};
  border-radius: 6px;
  background-color: transparent;
  margin: ${(props) => props.margin};
  cursor: pointer;
`
