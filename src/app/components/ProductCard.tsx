import React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
}

export function ProductCard(props: ProductCardProps) {
  return (
    <div>
      <img src={props.image} alt={props.title} />
      <p>{props.title}</p>
      <p>{props.price}</p>
    </div>
  );
}
