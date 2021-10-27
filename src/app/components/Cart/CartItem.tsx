import React, { FC } from "react"
import {
  useGetProductByIdQuery,
  useGetVariantByIdQuery,
} from "src/graphql/generated/types"
import { FlexWrapper } from "../UI/FlexWrapper"
import { Image } from "../UI/Image"

type CartItemProps = {
  variantId: string
  productId: string
  quantity: number
}

export const CartItem: FC<CartItemProps> = ({
  productId,
  variantId,
  quantity,
}) => {
  const {
    data: variationData,
    loading: isVariationLoading,
    error: variationError,
  } = useGetVariantByIdQuery({
    variables: { productId, variantId },
  })
  const {
    data: productData,
    loading: isProductLoading,
    error: productError,
  } = useGetProductByIdQuery({
    variables: {
      id: productId,
    },
  })

  if (isVariationLoading || isProductLoading) {
    return <div>Loading...</div>
  }
  if (variationError || productError) {
    return <div>Error fetching cart item</div>
  }

  return (
    <FlexWrapper direction="row" justify="space-between">
      <Image
        height={120}
        width={120}
        url={productData?.getProductById?.image.url ?? ""}
      />
      <p>SKU: {variationData?.getVariantById?.productCode}</p>
      <p>Total Price ${variationData?.getVariantById?.unitPrice * quantity}</p>
      <p>Quantity: {quantity}</p>
    </FlexWrapper>
  )
}
