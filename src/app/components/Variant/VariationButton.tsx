import styled from "styled-components"

type VariationButtonProps = {
  isSelected: boolean
  margin?: string
}

export const VariationButton = styled.button<VariationButtonProps>`
  padding: var(--space-x1) var(--space-x2);
  border: ${(props) =>
    props.isSelected ? "2px solid #00ff55" : "2px solid #e8e8e8"};
  border-radius: var(--default-border-radius);
  background-color: transparent;
  margin: ${(props) => props.margin};
  cursor: pointer;
`
