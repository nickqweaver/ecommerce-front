import React from "react"
import { AllVariantsType } from "src/graphql/generated/types"
import { getVariantOptions } from "../utils/variantHelpers"

type VariantProps = {
  variants: AllVariantsType[]
}
export function Variants(props: VariantProps) {
  return (
    <>
      {getVariantOptions(props.variants).map((variantOption) => {
        return (
          <>
            <label htmlFor={variantOption.label}>{variantOption.label}</label>
            <select name={variantOption.label} id={variantOption.label}>
              {variantOption.options.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>
          </>
        )
      })}
    </>
  )
}
