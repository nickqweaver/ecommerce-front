import React from "react"
import { useParams } from "react-router-dom"
import {
  useGetProductBySlugQuery,
  useGetVariantByIdLazyQuery,
} from "src/graphql/generated/types"
import { Variants } from "../components/Variant/Variants"
import { Page } from "../components/UI/Page"
import { Image } from "../components/UI/Image"
import { FlexWrapper } from "../components/FlexWrapper"
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
              <span>${activeVariantData?.getVariantById?.unitPrice}</span>
              <span>SKU: {activeVariantData?.getVariantById?.productCode}</span>
              <span>
                {checkStock(activeVariantData?.getVariantById?.stock ?? 0)}
              </span>
            </>
          )}

          {variants && variationOptions && (
            <Variants
              variants={variants}
              variationOptions={variationOptions}
              setActiveVariantId={setActiveVariantId}
            />
          )}
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
