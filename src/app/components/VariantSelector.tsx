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
      <select
        name={props.label}
        id={props.label}
        defaultValue={props.options[0]}
        onChange={(e) =>
          props.onChange(convertToCamelCase(props.label), e.target.value)
        }
      >
        {props.options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </>
  )
}
