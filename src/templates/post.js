import React from 'react'
import { graphql, Link } from 'gatsby'
import tw, { css } from 'twin.macro'
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"

const tryin = css`
h1 {
  ${tw` text-6xl mt-8 leading-none `}
}
h5{
  ${tw` leading-none tracking-tighter mt-0 mb-6 `}
}
p {
  ${tw` text-xl font-thin leading-tight `}
}
`

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
      <div css={[tryin]}>
        <h1> {mdx.frontmatter.title} </h1>
        <h5> {mdx.frontmatter.author} </h5>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <Link to="/blog">&rarr; back to blog </Link>
      </div>
    </Layout>

  )
}

export default PostTemplate