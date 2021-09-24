import React, { FC, useState } from "react"
import { convertToCamelCase } from "src/app/utils/convertCasing"
import styled from "styled-components"
import { FlexWrapper } from "../FlexWrapper"

type VariantSelectorProps = {
  label: string
  options: string[]
  onChange: (label: string, choice: string) => void
  defaultActiveIndex: number
}

const VariantSelectorButton = styled.button``

export const VariantSelector: FC<VariantSelectorProps> = (props) => {
  const [activeIndex, setActiveIndex] = useState(props.defaultActiveIndex)

  return (
    <>
      <label style={{ fontWeight: 600 }} htmlFor={props.label}>
        {props.label}
      </label>
      <FlexWrapper direction="row">
        {props.options.map((option, index) => (
          <button
            style={{ background: activeIndex === index ? "green" : "white" }}
            onClick={() => {
              setActiveIndex(index)
              props.onChange(convertToCamelCase(props.label), option)
            }}
          >
            {option}
          </button>
        ))}
      </FlexWrapper>
    </>
  )
}
