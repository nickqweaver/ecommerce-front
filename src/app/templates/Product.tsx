import React from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { useGetProductBySlugQuery } from "src/graphql/generated/types"
import { Variants } from "../components/Variants"

const Image = styled.img`
  width: 200px;
  height: 200px;
`

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
  const description = data?.getProductBySlug?.description

  // Query by slug to get product info
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
      {variants && <Variants variants={variants} />}
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
