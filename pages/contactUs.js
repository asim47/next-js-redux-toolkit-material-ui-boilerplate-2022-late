import Head from "next/head"
import Footer from "../src/commonComponets/Footer"
import NavbarComponent from "../src/commonComponets/Navbar"
import ContactUs from "../src/components/contactUs/ContactUs"


const index = () => {
    return (
        <>
            <Head>
                <title>Iview Theraputics</title>
            </Head>
            <NavbarComponent />
            <ContactUs />
            <Footer />
        </>
    )
}

export default index
