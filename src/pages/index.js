import React from "react"
import { link } from "gatsby"
import tw from "twin.macro"
import Layout from "../components/layout"

const Home = () => {
  return (
    <Layout>
      <h1 css={tw`bg-teal-500 text-pink-600 text-5xl`}>heeey world!</h1>
      <h2 css={tw`bg-teal-500 text-pink-600 text-5xl`}>Holaaa Mundo!</h2>
    </Layout>
  )
}

export default Home