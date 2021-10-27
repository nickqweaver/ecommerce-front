import React from "react"
import styled from "styled-components"
import { FlexWrapper } from "../components/UI/FlexWrapper"

const CartCounter = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 1000rem;
  color: #fff;
  font-size: 10px;
  background-color: #0099ff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -12px;
  right: -12px;
  font-weight: 600;
`

type CartProps = {
  itemCount: number
}

export default function CartIcon(props: CartProps) {
  return (
    <FlexWrapper justify="center" alignItems="center" position="relative">
      {props.itemCount > 0 && (
        <CartCounter>
          {props.itemCount < 100 ? props.itemCount : "99"}
        </CartCounter>
      )}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1"
          stroke="#221b38"
          fill="none"
          d="M18 20C18.5523 20 19 19.5523 19 19C19 18.4477 18.5523 18 18 18C17.4477 18 17 18.4477 17 19C17 19.5523 17.4477 20 18 20Z"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1"
          stroke="#221b38"
          fill="none"
          d="M10 20C10.5523 20 11 19.5523 11 19C11 18.4477 10.5523 18 10 18C9.44772 18 9 18.4477 9 19C9 19.5523 9.44772 20 10 20Z"
        ></path>
        <path fill="none" d="M22 4L20 15H8L6 4" strokeWidth="1"></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1"
          stroke="#221b38"
          d="M22 4L20 15H8L6 4"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1"
          stroke="#221b38"
          d="M2 4H6"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1"
          stroke="#221b38"
          d="M11 11H17"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1"
          stroke="#221b38"
          d="M10 7H18"
        ></path>
      </svg>
    </FlexWrapper>
  )
}
