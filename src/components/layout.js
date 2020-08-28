import React from "react"
import { link } from "gatsby"
import tw from "twin.macro"
import "../styles/global.css"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main css={tw`m-auto w-11/12 max-w-5xl`}>{children}</main>
    </>

  )
}

export default Layout