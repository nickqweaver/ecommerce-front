import React, { FC } from "react"
import { VariationOptionType } from "src/graphql/generated/types"

type VariantSelectorsProps = {
  variationOptions: VariationOptionType[]
  setVariantOptions: (options: string[]) => void
  variantOptions: string[]
}
export const VariantSelectors: FC<VariantSelectorsProps> = ({
  variationOptions,
  setVariantOptions,
  variantOptions,
}) => {
  const defaultItems = variationOptions.flatMap((option) =>
    option.options?.filter(
      (option, index) => index === 0 && option !== undefined
    )
  )

  React.useEffect(() => {
    setVariantOptions(defaultItems as string[])
  }, []) //eslint-disable-line

  const handleSelectionChange = (option: string, index: number) => {
    if (index > variationOptions.length - 1) {
      setVariantOptions([...variantOptions, option])
    } else {
      const newState = [...variantOptions]
      newState.splice(index, 1, option)
      setVariantOptions(newState)
    }
  }
  return (
    <>
      {variationOptions.map((option, optionIndex) => {
        return (
          <>
            <label style={{ fontWeight: 600 }} htmlFor={option.label}>
              {option.label}
            </label>
            {option.options?.map((option) => {
              return (
                <button
                  style={{
                    background: variantOptions.some(
                      (variantOption) => variantOption === option
                    )
                      ? "green"
                      : "none",
                  }}
                  onClick={() => {
                    handleSelectionChange(option, optionIndex)
                  }}
                >
                  {option}
                </button>
              )
            })}
          </>
        )
      })}
    </>
  )
}
