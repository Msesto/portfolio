import React from "react"
import tw from "twin.macro"
import Layout from "../components/layout"
import ProjectPreview from "../components/projectPreview"
import { graphql, useStaticQuery } from "gatsby"

const Projects = () => {

  let imgQuery = useStaticQuery(graphql`
  query {
    p1: imageSharp(id: {eq: "3113c2c0-8552-5076-82f3-ada988a6be42"}) {
      id
      fluid(maxWidth: 300,
            maxHeight: 300) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    p2: imageSharp(id: {eq: "c61fe1fc-f9dc-5175-afe3-986482364323"}) {
      id
      fluid(maxWidth: 300,
            maxHeight: 300) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    p3: imageSharp(id: {eq: "1ebb78c5-39b7-54b1-bd7d-e5a3673de46f"}) {
      id
      fluid(maxWidth: 300,
            maxHeight: 300) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    p4: imageSharp(id: {eq: "9eaffcab-fd39-5bc9-a71c-18981750caec"}) {
      id
      fluid(maxWidth: 300,
            maxHeight: 300) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`)

  let data = [
    {
      title: 'project 1',
      description: 'this is a not too long description with the sole purpose of checking styles for future projects, thanks for cheking it out!',
      img: imgQuery.p1,
      repo: 'https://github.com/Msesto'
    },
    {
      title: 'project 2',
      description: 'this is a not too long description with the sole purpose of checking styles for future projects, thanks for cheking it out!',
      img: imgQuery.p2,
      repo: 'https://github.com/Msesto'
    },
    {
      title: 'project 3',
      description: 'this is a not too long description with the sole purpose of checking styles for future projects, thanks for cheking it out!',
      img: imgQuery.p3,
      repo: 'https://github.com/Msesto'
    },
    {
      title: 'project 4',
      description: 'this is a longer description with the sole purpose of checking styles for future projects, and making sure being longer doesnt screw things up, thanks for cheking it out!',
      img: imgQuery.p4,
      repo: 'https://github.com/Msesto'
    },
  ]

  return (
    <Layout>
      <h1 css={tw`font-bold text-3xl`}>Projects</h1>
      <p css={tw`font-thin text-base italic`}>here you can see my projects, more info in each project's repo. (Right now its all placeholders)</p>
      <div css={tw`grid grid-cols-1 md:grid-cols-2`}>
        {data.map(e => (
          <ProjectPreview key={e.title} projectData={e}></ProjectPreview>
        ))}
      </div>
    </Layout>
  )
}

export default Projects