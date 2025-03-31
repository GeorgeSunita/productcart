import React from "react";
import Card from "./Card";
import { ProductData } from "./ProductData";
import { CartContext } from "../context/cartcontext";
import { useEffect, useState, useContext } from "react";
export default function Main() {
  const { cartItems, addToCart } = useContext(CartContext);
  return (
    <>
      <div className="container max-w-max mx-10 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
        {ProductData.map((product, id) => (
          <Card key={id} product={product} />
        ))}
      </div>
    </>
  );
}
