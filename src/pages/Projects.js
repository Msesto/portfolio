import React from "react"
import tw from "twin.macro"
import Layout from "../components/layout"
import ProjectPreview from "../components/projectPreview"

const Projects = () => {

  let data = [
    {
      title: 'project 1',
      description: 'this is a not too long description with the sole purpose of checking styles for future projects, thanks for cheking it out!',
      img: '../../images/alvan-nee.jpg'
    }
  ]

  return (
    <Layout>
      <h1>heeey world!</h1>
      {data.map(e => (
        <ProjectPreview key={e.title} projectData={e}></ProjectPreview>
      ))}
    </Layout>
  )
}

export default Projects