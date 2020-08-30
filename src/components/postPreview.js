import React from "react"
import { Link } from "gatsby"
import tw, { css } from "twin.macro"

const postPreview = ({ post }) => {

  return (
    <article>
      <h3><Link to={`/${post.slug}/`}> {post.title} </Link></h3>
      <p> {post.excerpt} </p>
      <Link to={`/${post.slug}`}>Read more &rarr;</Link>
    </article>
  )
}

export default postPreview