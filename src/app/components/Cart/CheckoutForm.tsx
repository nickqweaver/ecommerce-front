import React, { FC } from "react"
import { useForm } from "react-hook-form"
import { Redirect } from "react-router"
import { useCart } from "src/app/hooks/useCart"
import { useCreateOrderMutation } from "src/graphql/generated/types"

type CheckoutFormProps = {}

export const CheckoutForm: FC<CheckoutFormProps> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const { cart } = useCart()
  const [createOrder, { data, loading: isLoading, error }] =
    useCreateOrderMutation()

  // Add Context for Order?
  const onSubmit = (data: any) => {
    const orderItems = cart.items.map((item) => ({
      quantity: item.quantity,
      productId: item.productId,
      variantId: item.variantId,
    }))
    createOrder({ variables: { orderItems } })
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (data) {
    // TODO - Redirect to Order Completion Page :)
    return <Redirect to="products" />
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name</label>
      <input {...register("firstName")} />
      <label htmlFor="lastName">Last Name</label>
      <input {...register("lastName")}></input>
      <label htmlFor="Address 1">Address 1</label>
      <input {...register("address1")}></input>
      <label htmlFor="Address 2">Address 2</label>
      <input {...register("address2")}></input>
      <label htmlFor="city">City</label>
      <input {...register("city")}></input>
      <label htmlFor="state">State</label>
      <input {...register("state")}></input>
      <label htmlFor="zip">City</label>
      <input {...register("zip")}></input>
      <input type="submit"></input>
    </form>
  )
}
