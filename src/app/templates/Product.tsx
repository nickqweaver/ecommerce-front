import React from "react"
import { useParams } from "react-router-dom"
import {
  useGetProductBySlugQuery,
  useGetVariantByIdLazyQuery,
} from "src/graphql/generated/types"
import { Variants } from "../components/Variant/Variants"
import { Page } from "../components/UI/Page"
import { Image } from "../components/UI/Image"
import { FlexWrapper } from "../components/UI/FlexWrapper"
import { Button } from "../components/UI/Button"
import { useCart } from "../hooks/useCart"

// TODO add context
export function Product() {
  let { slug } = useParams<{ slug: string }>()
  const {
    data,
    loading: isLoading,
    error,
  } = useGetProductBySlugQuery({
    variables: { slug },
  })
  const variants = data?.getProductBySlug?.variants
  const variationOptions = data?.getProductBySlug?.variationOptions
  const [
    getActiveVariant,
    { data: activeVariantData, loading: isActiveVariantDataLoading },
  ] = useGetVariantByIdLazyQuery()
  const { updateCart } = useCart()
  const productId = data?.getProductBySlug?.id
  const description = data?.getProductBySlug?.description

  const [activeVariantId, setActiveVariantId] = React.useState<string | null>(
    null
  )

  React.useEffect(() => {
    if (productId && activeVariantId) {
      getActiveVariant({ variables: { productId, variantId: activeVariantId } })
    }
  }, [activeVariantId, getActiveVariant, productId])

  const imageUrl = data?.getProductBySlug?.image.url

  const checkStock = (quantity: number) => {
    if (quantity === 0) {
      return "Out of Stock"
    }
    return quantity < 10
      ? `Hurry, Only ${quantity} Left!`
      : quantity > 25
      ? "In Stock"
      : `${quantity} Left`
  }

  const activeVariant = activeVariantData?.getVariantById

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>There was an error</div>
  }
  return (
    <Page>
      <FlexWrapper direction="row" justify="space-between">
        {imageUrl && <Image width={420} height={420} url={imageUrl} />}
        <FlexWrapper>
          <h4 style={{ fontWeight: 600 }}>{data?.getProductBySlug?.name}</h4>
          {activeVariantId && !isActiveVariantDataLoading && (
            <>
              <span>${activeVariant?.unitPrice}</span>
              <span>SKU: {activeVariant?.productCode}</span>
              <span>{checkStock(activeVariant?.stock ?? 0)}</span>
            </>
          )}
          {variants && variationOptions && (
            <Variants
              variants={variants}
              variationOptions={variationOptions}
              setActiveVariantId={setActiveVariantId}
            />
          )}
          <Button
            style={{ marginTop: "var(--space-x4)" }}
            onClick={() =>
              updateCart({
                type: "ADD_CART_ITEM",
                payload: {
                  item: {
                    variantId: activeVariant?.id,
                    quantity: 1,
                    productId: data?.getProductBySlug?.id,
                    unitPrice: parseFloat(activeVariant?.unitPrice),
                  },
                },
              })
            }
          >
            Add to Cart
          </Button>
          <Button
            style={{ marginTop: "var(--space-x4)" }}
            onClick={() => {
              if (activeVariant?.productCode)
                updateCart({
                  type: "DELETE_CART_ITEM",
                  payload: {
                    productCode: activeVariant?.productCode,
                  },
                })
            }}
          >
            Delete Item
          </Button>
        </FlexWrapper>
      </FlexWrapper>
      {description && (
        <FlexWrapper
          dangerouslySetInnerHTML={{
            __html: description,
          }}
          justify="flex-start"
        ></FlexWrapper>
      )}
    </Page>
  )
}
