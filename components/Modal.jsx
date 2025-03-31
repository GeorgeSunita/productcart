import React from "react";
import { CartContext } from "../context/cartcontext";
import { useEffect, useState, useContext } from "react";

export default function Modal({ showModal, handleShowModal }) {
  const { cartItems, clearCart } = useContext(CartContext);

  function handleClearCart() {
    handleShowModal();
    clearCart();
  }
  return (
    showModal && (
      <div className="w-96 fixed top-1/3  left-1/3 h-auto rounded-lg bg-white flex flex-col justify-center items-center">
        <div className="flex flex-col justify-start items-center py-2">
          <img src="./assets/images/icon-order-confirmed.svg" />
          <h1 className="font-bold text-3xl">Order Confirmed</h1>
          <h3 className="text-sm ">We hope you enjoy your food!</h3>
        </div>

        <div className="flex flex-col w-full px-2 py-2 gap-2 justify-center items-center bg-rose-50">
          {cartItems.map((item) => (
            <div className="flex flex-col w-full gap-2 justify-center items-center">
              <h3 className="text-xs font-bold">{item.name}</h3>
              <p className="flex justify-items-start items-center">
                <span className="px-2 text-red font-400 text-xs">
                  {item.quantity} x
                </span>{" "}
                @{" "}
                <span className="px-2 text-gray-400 font-400 text-xs">
                  {" "}
                  ${item.price}
                </span>{" "}
                <span className="px-2 text-gray-800 font-400 text-xs">
                  {item.price * item.quantity}
                </span>
              </p>
            </div>
          ))}
          <h3 className="flex justify-between items-center text-gray-400 font-400 text-xs">
            Order Total{" "}
            <span className="font-bold text-xl text-black px-6 py-4">
              {" "}
              $
              {cartItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
              )}
            </span>
          </h3>
        </div>
        <button
          className="w-full py-2 px-2 bg-whitetext-gray-800 font-semibold border border-gray-400 -m-12 bg-red rounded-full shadow-black"
          onClick={() => handleClearCart()}
        >
          Start New Order
        </button>
      </div>
    )
  );
}
