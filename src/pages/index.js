import React from "react"
import tw, { css } from "twin.macro"
import Layout from "../components/layout"

const Home = () => {
  return (
    <Layout>
      <main css={tw`flex w-9/12 h-full items-center`}>
        <p css={tw`text-2xl md:w-9/12 m-auto`}> Hi, I'm an enthusiastic software developer, currently an engineering student and learning modern web development by myself.</p>
      </main>
    </Layout >
  )
}

export default Home
