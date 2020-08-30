import React from "react"
import Helmet from "react-helmet"
import tw, { css } from "twin.macro"
import "../styles/global.css"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>Martin Sesto's Portfolio</title>
      </Helmet>
      <Header />
      <main css={[tw`flex-auto m-auto w-11/12 max-w-5xl bg-gray-400`]}>{children}</main>
      <Footer />
    </>

  )
}

export default Layout