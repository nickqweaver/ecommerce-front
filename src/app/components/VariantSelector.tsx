import React, { FC } from "react"
import { convertToCamelCase } from "../utils/variantHelpers"

type VariantSelectorProps = {
  label: string
  options: string[]
  onChange: (label: string, choice: string) => void
}

export const VariantSelector: FC<VariantSelectorProps> = (props) => {
  return (
    <>
      <label htmlFor={props.label}>{props.label}</label>
      {props.options.map((option) => (
        <button
          onClick={() =>
            props.onChange(convertToCamelCase(props.label), option)
          }
        >
          {option}
        </button>
      ))}
    </>
  )
}
