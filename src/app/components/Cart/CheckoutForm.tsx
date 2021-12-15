import React, { FC } from "react"
import { useForm } from "react-hook-form"
import { Redirect } from "react-router"
import { CustomerContext } from "src/app/context/customer"
import { useCart } from "src/app/hooks/useCart"
import {
  useCreateOrderMutation,
  useCreateCustomerMutation,
  useLoginMutation,
  useCreateAddressMutation,
  CustomerAddressCountryChoices,
} from "src/graphql/generated/types"
import { Button } from "../UI/Button"

type CreateCustomerFormProps = {
  onComplete: () => void
}

type LoginCustomerFormProps = {
  onComplete: () => void
}
// TODO - Refactor to create re usable inputs/forms and restructure these

export function LoginCustomerForm(props: LoginCustomerFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const { dispatch } = React.useContext(CustomerContext)
  const [error, setError] = React.useState<string | null>(null)
  const [login] = useLoginMutation({
    onCompleted: (data) => {
      const token = data.login?.token
      const customer = data.login?.customer
      if (token && customer) {
        dispatch({ type: "LOGIN", payload: { customer, token } })
      }
      props.onComplete()
    },
    onError: (err) => {
      // Catches error instead of crashing app
      setError(err.message)
    },
  })

  const onSubmit = (input: { password: string; username: string }) => {
    login({
      variables: {
        username: input.username,
        password: input.password,
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Username</label>
      <input {...register("username")} />
      <label htmlFor="password">Password</label>
      <input {...register("password")} type="password" />
      {error && <span>{error}</span>}
      <input type="submit"></input>
    </form>
  )
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

// TODO check for address first then pre populate with address on file
function CreateAddressForm(props: { onComplete: () => void }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [createAddress] = useCreateAddressMutation({
    onCompleted: () => props.onComplete(),
  })

  const onSubmit = (input: {
    line1: string
    line2: string
    zip: string
    city: string
    state: string
    country: string
  }) => {
    const { line1, line2, zip, state, country, city } = input
    createAddress({
      variables: {
        address: {
          line1,
          line2,
          city,
          country: CustomerAddressCountryChoices.Us,
          zip: parseInt(zip),
          state,
        },
      },
    })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="Address 1">Address 1</label>
      <input {...register("line1")}></input>
      <label htmlFor="Address 2">Address 2</label>
      <input {...register("line2")}></input>
      <label htmlFor="city">City</label>
      <input {...register("city")}></input>
      <label htmlFor="state">State</label>
      <input {...register("state")}></input>
      <label htmlFor="zip">City</label>
      <input {...register("zip")}></input>
      <label htmlFor="zip">Country</label>
      {/* <input value="USA" {...register("country")}></input> */}
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

  const { cart, clearCart } = useCart()
  const [createOrder, { data, loading: isLoading, error }] =
    useCreateOrderMutation({ onCompleted: () => clearCart() })

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
      <Button type="submit">Place Order</Button>
    </form>
  )
}

type JoinOrLoginProps = {
  onComplete: () => void
}
export const JoinOrLogin = (props: JoinOrLoginProps) => {
  const [shouldJoin, setShouldJoin] = React.useState(false)
  return (
    <>
      {shouldJoin ? (
        <CreateCustomerForm onComplete={props.onComplete} />
      ) : (
        <LoginCustomerForm onComplete={props.onComplete} />
      )}
      <Button onClick={() => setShouldJoin(!shouldJoin)}>
        {shouldJoin ? "Login" : "Create Account"}
      </Button>
    </>
  )
}

export const CheckoutForm = () => {
  const [step, setStep] = React.useState<
    "validateCustomer" | "addAddress" | "createOrder"
  >("validateCustomer")
  return step === "validateCustomer" ? (
    <JoinOrLogin onComplete={() => setStep("addAddress")} />
  ) : step === "addAddress" ? (
    <CreateAddressForm onComplete={() => setStep("createOrder")} />
  ) : (
    <CreateOrderForm />
  )
}
