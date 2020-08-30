import React from 'react'
import { graphql, Link } from 'gatsby'
import tw, { css } from 'twin.macro'
import Layout from "../components/layout"

const PostTemplate = () => {



  return (
    <Layout>
      <h1> post title </h1>
      <p> post by author </p>
      <p> post body here </p>
      <Link to="/blog">&rarr; back to blog </Link>
    </Layout>

  )
}

export default PostTemplate