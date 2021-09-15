import { AllVariantsType } from "src/graphql/generated/types"

const exclusionKeys = new Set([
  "id",
  "productCode",
  "unitPrice",
  "stock",
  "__typename",
])

export const getVariantLabels = (variants: AllVariantsType[]) => {
  let labels: string[] = []
  variants.forEach((variant) => {
    const allKeys = Object.keys(variant)
    labels = allKeys.filter((key) => !exclusionKeys.has(key))
  })
  return labels
}

export const convertToSentenceCase = (str: string) =>
  str.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
    return str.toUpperCase()
  })

export const getVariantOptions = (variants: AllVariantsType[]) => {
  const variantLabels = getVariantLabels(variants)
  const variantOptions = variantLabels.map((label) => {
    let options = new Set<string>([])
    variants.forEach((variant) => {
      for (const [key, value] of Object.entries(variant)) {
        if (key === label) {
          options.add(value)
        }
      }
    })
    const optionsArray = Array.from(options)
    return {
      label: convertToSentenceCase(label),
      options: optionsArray,
    }
  })
  return variantOptions
}
