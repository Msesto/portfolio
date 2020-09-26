import React from "react"
import Helmet from "react-helmet"
import tw, { css } from "twin.macro"
import "../styles/global.css"
import Header from "./header"
import Footer from "./footer"

const dHeight = css`
  height: calc(100% - 127px);
`

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Martin Sesto's Portfolio</title>
      </Helmet>
      <Header />
      <main css={[tw`m-auto mt-12 w-11/12 max-w-5xl`, dHeight]}>{children}</main>
      <Footer />
    </>

  )
}

export default Layout