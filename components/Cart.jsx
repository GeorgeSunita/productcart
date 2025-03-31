import React from "react";
import { CartContext } from "../context/cartcontext";
import { useEffect, useState, useContext } from "react";
import Modal from "./Modal";
export default function Cart() {
  const { cartItems, addToCart, removeFromCart, cartTotal, clearCart } =
    useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div className="xl:fixed top-10 right-10 bg-white w-auto shadow-2xl px-10 py-2 h-min lg:bottom-0 md:bottom-0 sm:bottom-0 flex flex-col  items-center">
        <h1 className="text-red font-bold mb-4">
          Your Cart(
          {cartItems.reduce(
            (quantity, item) => item.quantity + quantity,
            0
          )}){" "}
        </h1>
        {cartItems == 0 ? (
          <img src="./assets/images/illustration-empty-cart.svg" />
        ) : (
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <div>
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
                  <span className="px-1 py-1 border-solid border-2 border-red-500 rounded-full cursor-pointer">
                    <img
                      onClick={() => removeFromCart(item)}
                      src="./assets/images/icon-remove-item.svg"
                    />
                  </span>
                </p>
              </div>
            ))}
          </div>
        )}
        <h3 className="mt-2 flex justify-between items-center text-gray-400 font-400 text-xs">
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

        <span className="flex  justify-center  items-center text-xs text-gray-600 mt-6 bg-rose-50 px-2 py-2 ">
          <img src="./assets/images/icon-carbon-neutral.svg" /> This is a carbon
          neutral delivery
        </span>
        <button
          onClick={() => handleShowModal()}
          className="text-center w-44 py-2 px-2 mt-4 bg-whitetext-gray-800 font-semibold border border-gray-400 -m-12 bg-red rounded-full shadow"
        >
          Confirm Order
        </button>
        <Modal showModal={showModal} handleShowModal={handleShowModal} />
      </div>
    </>
  );
}
