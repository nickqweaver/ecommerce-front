import React, { FC, useState } from "react"
import styled from "styled-components"
import { convertToCamelCase } from "../../utils/variantHelpers"
import { FlexWrapper } from "../FlexWrapper"

type VariantSelectorProps = {
  label: string
  options: string[]
  onChange: (label: string, choice: string) => void
}

const VariantSelectorButton = styled.button``

export const VariantSelector: FC<VariantSelectorProps> = (props) => {
  return (
    <>
      <label style={{ fontWeight: 600 }} htmlFor={props.label}>
        {props.label}
      </label>
      <FlexWrapper direction="row">
        {props.options.map((option) => (
          <button
            onClick={() =>
              props.onChange(convertToCamelCase(props.label), option)
            }
          >
            {option}
          </button>
        ))}
      </FlexWrapper>
    </>
  )
}
