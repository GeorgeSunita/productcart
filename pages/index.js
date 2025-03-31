import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Cart from "../components/Cart";
import { CartProvider } from "../context/cartcontext";
import Modal from "../components/Modal";
export default function Home() {
  return (
    <>
      <div className="mx-auto bg-rose300">
        <CartProvider>
          <Header />
          <Main />
          <Cart />
          <Modal />
        </CartProvider>
      </div>
    </>
  );
}
