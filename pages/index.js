import Head from "next/head"
import Footer from "../src/commonComponets/Footer"
import NavbarComponent from "../src/commonComponets/Navbar"
import Header from "../src/components/home/Header"


const index = () => {
  return (
    <>
      <Head>
        <title>Iview Theraputics</title>
      </Head>
      <NavbarComponent />
      <Header />
      <Footer />
    </>
  )
}

export default index
