import React from "react"
import { Link } from "gatsby"
import tw, { css } from "twin.macro"
import Image from "gatsby-image"

const postPreview = ({ post }) => {

  return (
    <>
      <h3 css={tw`leading-snug text-3xl ml-3`}><Link to={`/${post.slug}/`}> {post.title} </Link></h3>
      <article css={tw`flex flex-shrink-0 ml-3`}>
        <Image css={tw`flex-shrink-0 w-32 h-32 md:w-48 md:h-48`}
          fluid={post.image.sharp.fluid}
        />
        <div>
          <p css={tw`leading-tight text-lg ml-1 font-light`}> {post.excerpt} </p>
        </div>
      </article>
      <Link css={tw`leading-snug text-lg font-bold ml-3 text-orange-500`} to={`/${post.slug}`}>Read more &rarr;</Link>
    </>
  )
}

export default postPreview