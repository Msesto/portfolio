import React from "react"
import { render } from "react-dom"
// import { Link } from "gatsby"
import tw, { css } from "twin.macro"

const ProjectPreview = (projectData) => {

  return (
    <article css={tw``}>
      <h2>not here</h2>
      <img src={projectData.img} alt='projects preview gif'></img>
      <h2>{projectData.title}</h2>
      <p>{projectData.description}</p>
    </article>
  )
}

export default ProjectPreview