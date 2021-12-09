import React, { FC } from "react"
import { useForm } from "react-hook-form"
import { Redirect } from "react-router"
import { CustomerContext } from "src/app/context/customer"
import { useCart } from "src/app/hooks/useCart"
import {
  useCreateOrderMutation,
  useCreateCustomerMutation,
} from "src/graphql/generated/types"

type CreateCustomerFormProps = {
  onComplete: () => void
}

export function CreateCustomerForm(props: CreateCustomerFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [createCustomer] = useCreateCustomerMutation({
    onCompleted: (data) => {
      const token = data.createCustomer?.token
      const customer = data.createCustomer?.customer
      if (token && customer) {
        dispatch({ type: "LOGIN", payload: { customer, token } })
      }
      props.onComplete()
    },
    onError: (err) => {
      // Catches error instead of crashing app
      console.log(err, "ERROR")
    },
  })
  const { dispatch } = React.useContext(CustomerContext)

  const onSubmit = (input: {
    email: string
    password: string
    username: string
  }) => {
    createCustomer({
      variables: {
        username: input.username,
        email: input.email,
        password: input.password,
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input {...register("email", { required: true })} />
      {errors.email && <span>This field is required</span>}
      <label htmlFor="username">Username</label>
      <input {...register("username")} />
      <label htmlFor="password">Password</label>
      <input {...register("password")} type="password" />
      <input type="submit"></input>
    </form>
  )
}

function CreateOrderForm() {
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
  const onSubmit = () => {
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

export const CheckoutForm = () => {
  const [step, setStep] = React.useState<"createCustomer" | "createOrder">(
    "createCustomer"
  )
  return step === "createCustomer" ? (
    <CreateCustomerForm onComplete={() => setStep("createOrder")} />
  ) : (
    <CreateOrderForm />
  )
}
