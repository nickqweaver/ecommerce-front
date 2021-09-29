import React, { useCallback } from "react"
import {
  AllVariantsType,
  VariationOptionType,
} from "src/graphql/generated/types"
import { VariantSelectors } from "./VariantSelectors"

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

  const [variantOptions, setVariantOptions] = React.useState<string[]>([])
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
    (selectedOptions: string[]) => {
      let idMatch = null
      if (selectedOptions.length < 1) {
        return null
      }
      variants.forEach((variant) => {
        const values = Object.values(variant)
        const hasMatches = selectedOptions.every((option) =>
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
    setActiveVariantId(getVariantId(variantOptions))
  }, [variantOptions]) //eslint-disable-line

  return (
    <VariantSelectors
      variationOptions={props.variationOptions}
      variantOptions={variantOptions}
      setVariantOptions={setVariantOptions}
    />
  )
}
