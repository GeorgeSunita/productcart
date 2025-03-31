import React from "react";
import { CartContext } from "../context/cartcontext";
import { useEffect, useState, useContext } from "react";

export default function Card({ product }) {
  console.log(product);
  const { cartItems, addToCart, decreaseQuantity } = useContext(CartContext);
  return (
    <>
      <div className="flex flex-col justify-start items-start">
        <div className="flex flex-col justify-center items-center">
          <img
            className="max-w-md h-auto  rounded-lg "
            src={product.image.mobile}
          />

          <div className="flex justify-between items-center ">
            {!cartItems.find((item) => item.id === product.id) ? (
              <button
                onClick={() => addToCart(product)}
                className="flex justify-between items-center bg-whitetext-gray-800 font-semibold py-2 px-4 border border-gray-400 bg-white -m-12 rounded-full shadow"
              >
                <span>
                  <img src="./assets/images/icon-add-to-cart.svg" />
                </span>{" "}
                Add to cart
              </button>
            ) : (
              <div className="w-32 py-2 px-4 flex justify-between items-center bg-whitetext-gray-800 font-semibold border border-gray-400 -m-12 bg-red rounded-full shadow">
                <button onClick={() => addToCart(product)}>+</button>
                <span className="">
                  {cartItems.find((item) => item.id === product.id).quantity}
                </span>{" "}
                <button
                  onClick={() => decreaseQuantity(product)}
                  className="w-6"
                >
                  -
                </button>
              </div>
            )}
          </div>
        </div>
        <h3 className="text-gray-400">{product.category}</h3>
        <h3 className="font-bold">{product.name}</h3>
        <h3 className="text-red">${product.price}</h3>
      </div>
    </>
  );
}
