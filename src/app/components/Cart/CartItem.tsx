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
    <FlexWrapper direction="row" justify="flex-start" alignItems="center">
      <Image
        height={84}
        width={84}
        url={productData?.getProductById?.image.url ?? ""}
      />
      <FlexWrapper
        justify="flex-start"
        alignItems="flex-start"
        style={{ paddingLeft: "var(--space-x4)", maxHeight: "84px" }}
        width="unset"
      >
        <h5 style={{ margin: "0px", fontWeight: 500, fontSize: "1rem" }}>
          {productData?.getProductById?.brand}
        </h5>
        <FlexWrapper
          style={{ lineHeight: 1 }}
          direction="row"
          justify="flex-start"
        >
          <h5
            style={{
              margin: "0px",
              fontWeight: 500,
            }}
          >
            ${variationData?.getVariantById?.unitPrice}
          </h5>
          <p style={{ padding: "0px var(--space-x_5)", fontSize: "0.75rem" }}>
            x
          </p>
          <h5
            style={{
              margin: "0px",
              color: "var(--secondary-font-color)",
              fontWeight: 500,
            }}
          >
            {quantity < 10 ? `0${quantity}` : quantity}
          </h5>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  )
}
