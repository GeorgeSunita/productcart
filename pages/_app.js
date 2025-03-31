import Head from "next/head";
import "../styles/global.css";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style global jsx>{``}</style>
    </>
  );
}

export default MyApp;
