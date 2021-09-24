import React, { useCallback } from "react"
import {
  AllVariantsType,
  VariationOptionType,
} from "src/graphql/generated/types"
import { VariantSelector } from "./VariantSelector"

type VariantProps = {
  variants: AllVariantsType[]
  setActiveVariantId: (id: string | null) => void
  variationOptions: VariationOptionType[]
}
export function Variants(props: VariantProps) {
  const { variants, setActiveVariantId } = props
  const [selectedVariantOptions, setSelectedVariantOptions] = React.useState<{
    [label: string]: string
  }>()

  const handleSelectedVariantOptions = useCallback(
    (label: string, choice: string) => {
      const newState = {
        ...selectedVariantOptions,
      }
      newState[label] = choice
      setSelectedVariantOptions(newState)
    },
    [selectedVariantOptions]
  )

  const getVariantId = React.useCallback(
    (selectedOptions: { [label: string]: string }) => {
      const selectedOptionValues = Object.values(selectedOptions).filter(
        (value) => value !== null
      )
      let idMatch = null
      if (selectedOptionValues.length < 1) {
        return null
      }
      variants.forEach((variant) => {
        const values = Object.values(variant)
        const hasMatches = selectedOptionValues.every((option) =>
          values.includes(option)
        )
        if (hasMatches) {
          idMatch = variant.id
        }
      })
      return idMatch
    },
    [variants]
  )

  React.useEffect(() => {
    if (selectedVariantOptions) {
      setActiveVariantId(getVariantId(selectedVariantOptions))
    }
  }, [selectedVariantOptions]) //eslint-disable-line

  return (
    <>
      {props.variationOptions.map((variantionOption, index) => {
        return (
          <VariantSelector
            key={index}
            label={variantionOption.label}
            options={variantionOption.options ?? []}
            onChange={handleSelectedVariantOptions}
            defaultActiveIndex={0} // Determine this above and then match up states, that way we already know the active ID before these compnents render
          />
        )
      })}
    </>
  )
}
