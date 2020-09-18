import React from "react"
import { Link } from "gatsby"
import tw, { css } from "twin.macro"

const padMe = css`
  padding : 0.5rem calc((100vw - 850px)/2);
`

const linkMe = css`
  color: #fff;
  padding: 0.25rem;
  margin: 0 0 0.5rem 0 0;

  &.current-page{
    border-bottom: 2px solid #ffa500;
   }
`

const Header = () => {
  return (
    <header css={[tw`flex p-2 justify-between`, padMe]}>
      <Link to="/" css={tw`text-white text-4xl leading-tight`}>MARTIN<strong>SESTO</strong></Link>
      <nav css={tw`m-auto mx-0`}>
        <Link activeClassName="current-page" to="/" css={[tw`m-1 text-base font-medium leading-tight`, linkMe]}>About</Link>
        <Link activeClassName="current-page" to="/projects" css={[tw`m-1 text-base font-medium leading-tight`, linkMe]}>Projects</Link>
        <Link activeClassName="current-page" to="/technologies" css={[tw`m-1 text-base font-medium leading-tight`, linkMe]}>Technologies</Link>
        <Link activeClassName="current-page" to="/resume" css={[tw`m-1 text-base font-medium leading-tight`, linkMe]}>Resume</Link>
        <Link activeClassName="current-page" to="/blog" css={[tw`m-1 text-base font-medium leading-tight`, linkMe]}>Blog</Link>
        <Link activeClassName="current-page" to="/contact" css={[tw`m-1 text-base font-medium leading-tight`, linkMe]}>Contact</Link>
      </nav>
    </header >
  )
}

export default Header