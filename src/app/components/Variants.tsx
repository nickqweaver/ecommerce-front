import React from "react"
import { AllVariantsType } from "src/graphql/generated/types"
import { getVariantLabels, getVariantOptions } from "../utils/variantHelpers"
import { VariantSelector } from "./VariantSelector"

type VariantProps = {
  variants: AllVariantsType[]
  setActiveVariantId: (id: string | null) => void
}
export function Variants(props: VariantProps) {
  const { variants, setActiveVariantId } = props
  const labels = getVariantLabels(props.variants)
  const entries = labels.map((label) => [label, null])
  const [selectedVariantOptions, setSelectedVariantOptions] = React.useState(
    Object.fromEntries(entries)
  )

  const handleSelectedVariantOptions = (label: string, choice: string) => {
    setSelectedVariantOptions({ ...selectedVariantOptions, [label]: choice })
  }

  const getVariantId = React.useCallback(
    (selectedOptions: { [label: string]: string }) => {
      const selectedOptionValues = Object.values(selectedOptions).filter(
        (value) => value !== null
      )
      let idMatch = null

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
    setActiveVariantId(getVariantId(selectedVariantOptions))
  }, [selectedVariantOptions, getVariantId, setActiveVariantId])

  return (
    <>
      {getVariantOptions(variants).map((variantOption, index) => {
        return (
          <VariantSelector
            key={index}
            label={variantOption.label}
            options={variantOption.options}
            onChange={handleSelectedVariantOptions}
          />
        )
      })}
    </>
  )
}