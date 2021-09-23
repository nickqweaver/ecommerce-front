import React from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import {
  useGetProductBySlugQuery,
  useGetVariantByIdLazyQuery,
} from "src/graphql/generated/types"
import { Variants } from "../components/Variants"

const Image = styled.img`
  width: 200px;
  height: 200px;
`

export function Product() {
  let { slug } = useParams<{ slug: string }>()
  const [activeVariantId, setActiveVariantId] = React.useState<string | null>(
    null
  )

  const {
    data,
    loading: isLoading,
    error,
  } = useGetProductBySlugQuery({
    variables: { slug },
  })

  const [getActiveVariant, { data: activeVariantData }] =
    useGetVariantByIdLazyQuery()
  const productId = data?.getProductBySlug?.id
  const variants = data?.getProductBySlug?.variants
  const description = data?.getProductBySlug?.description

  React.useEffect(() => {
    if (productId && activeVariantId) {
      getActiveVariant({ variables: { productId, variantId: activeVariantId } })
    }
  }, [activeVariantId, getActiveVariant, productId])

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>There was an error</div>
  }
  return (
    <div>
      <h1>{data?.getProductBySlug?.name}</h1>
      <Image
        src={data?.getProductBySlug?.image.url}
        alt={data?.getProductBySlug?.name}
      />
      <p>{activeVariantData?.getVariantById?.unitPrice}</p>
      <p>{activeVariantData?.getVariantById?.productCode}</p>
      <p>{activeVariantData?.getVariantById?.stock} Left</p>
      {variants && (
        <Variants variants={variants} setActiveVariantId={setActiveVariantId} />
      )}
      {description && (
        <div
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></div>
      )}
    </div>
  )
}
