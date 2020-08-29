import React from "react"
import { link } from "gatsby"
import tw, { css } from "twin.macro"
import "../styles/global.css"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div css={[tw`flex-auto m-auto w-11/12 max-w-5xl bg-gray-400`]}>{children}</div>
      <Footer />
    </>

  )
}

export default Layout