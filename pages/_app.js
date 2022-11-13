import { Provider } from 'react-redux'
import store from '../src/store/store';
import "../src/scss/global.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head"

import "aos/dist/aos.css";
import AOS from "aos"
import { useEffect } from 'react';
import { useState } from 'react';

const MyApp = ({ Component, pageProps }) => {


  const [IsLoading, setIsLoading] = useState(false)

  useEffect(() => {
    AOS.init()

    setTimeout(() => {
      setIsLoading(false)
    }, 1100)
  }, [])


  return (
    <>
      <Head>
        <title>Iview Theraputics</title>
        <link rel="icon" href="/fav.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta 
        name="description" 
        content={"Yes"}/>
        <meta 
        name="title" 
        content={"Title"}/>
         <meta property="og:title" content="Title" key="ogtitle" />
      </Head>
      {
        IsLoading ? (
          <div style={{
            position: "fixed",
            zIndex: 1000000000000000000,
            width: "100vw",
            height: "100%",
            background: "white",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            top: 0,
          }}>
            Loading...
          </div>
        ) : null
      }

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
