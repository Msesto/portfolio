import React from "react"
import tw from "twin.macro"
import Layout from "../components/layout"
import usePosts from "../hooks/use-posts"
import PostPreview from "../components/postPreview"

const Blog = () => {
  const posts = usePosts()

  return (
    <Layout>
      <div css={tw`mt-4`}>
        <h1 css={tw`font-bold text-3xl`}>Blog post & random resources:</h1>
        <p css={tw`font-thin text-base italic`}>Here you can find some writings from my learning experience, mostly about technology.</p>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </Layout>
  )
}

export default Blog