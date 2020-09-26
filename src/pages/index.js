import React from "react"
import tw, { css } from "twin.macro"
import Layout from "../components/layout"

const Home = () => {
  return (
    <Layout>
      <section css={tw`flex w-9/12 h-full`}>
        <p css={tw`text-2xl md:w-9/12`}> Hi, I'm an enthusiastic software developer, currently an engineering student and learning modern web development by myself.</p>
      </section>
    </Layout >
  )
}

export default Home
