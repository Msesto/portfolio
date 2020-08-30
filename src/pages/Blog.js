import React from "react"
import tw from "twin.macro"
import Layout from "../components/layout"
import usePosts from "../hooks/use-posts"
import PostPreview from "../components/postPreview"

const Blog = () => {
  const posts = usePosts()

  return (
    <Layout>
      <h1>Read my blogs</h1>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}

export default Blog