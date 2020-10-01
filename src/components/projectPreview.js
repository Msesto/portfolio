import React from "react"
import tw, { css } from "twin.macro"
import Image from "gatsby-image"

const ProjectPreview = ({ projectData }) => {

  return (
    <article css={tw`flex md:ml-2 mt-4`}>
      <Image css={tw`h-48 w-48`} fluid={projectData.img.fluid} />
      <div css={tw`ml-2 w-64`}>
        <h2 css={tw`text-3xl leading-none`}>{projectData.title}</h2>
        <p css={tw`mt-1 font-light leading-tight`}>{projectData.description}</p>
        <a css={tw`text-orange-600 font-semibold`} href={projectData.repo}>To repo &rarr;</a>
      </div>
    </article>
  )
}

export default ProjectPreview