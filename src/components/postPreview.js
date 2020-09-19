import React from "react"
import { Link } from "gatsby"
import tw, { css } from "twin.macro"

const postPreview = ({ post }) => {

  return (
    <article css={tw`ml-3`}>
      <h3 css={tw`leading-snug text-3xl mt-3`} ><Link to={`/${post.slug}/`}> {post.title} </Link></h3>
      <p css={tw`leading-tight text-lg ml-1 font-light`}> {post.excerpt} </p>
      <Link css={tw`leading-snug text-lg font-hairline ml-1 text-orange-500`} to={`/${post.slug}`}>Read more &rarr;</Link>
    </article>
  )
}

export default postPreview