import React from 'react'
import { graphql, Link } from 'gatsby'
import tw, { css } from 'twin.macro'
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"

export const query = graphql`
query($slug: String!) {
  mdx(frontmatter: { slug: { eq : $slug } }){
    frontmatter {
      title
      author
    }
    body
  }
}`

const PostTemplate = ({ data: { mdx } }) => {

  return (
    <Layout>
      <h1> {mdx.frontmatter.title} </h1>
      <h5> {mdx.frontmatter.author} </h5>
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <Link to="/blog">&rarr; back to blog </Link>
    </Layout>

  )
}

export default PostTemplate