import React from "react"
import { Link } from "gatsby"
import tw, { css } from "twin.macro"

const padMe = css`
  padding : 0.5rem calc((100vw - 850px)/2);
`

const linkMe = css`
  color: #222;
  padding: 0.25rem;
  margin: 0 0 0.5rem 0 0;

  &.current-page{
    border-bottom: 2px solid #222;
   }
`

const Header = () => {
  return (
    <header css={[tw`flex bg-gray-400 p-2 justify-between`, padMe]}>
      <Link to="/" css={tw`text-4xl font-bold leading-tight`}>Martin Sesto</Link>
      <nav css={tw`m-auto mx-0`}>
        <Link activeClassName="current-page" to="/About" css={[tw`m-1 text-base font-medium leading-tight`, linkMe]}>About</Link>
        <Link activeClassName="current-page" to="/Projects" css={[tw`m-1 text-base font-medium leading-tight`, linkMe]}>Projects</Link>
        <Link activeClassName="current-page" to="/Technologies" css={[tw`m-1 text-base font-medium leading-tight`, linkMe]}>Technologies</Link>
        <Link activeClassName="current-page" to="/Resume" css={[tw`m-1 text-base font-medium leading-tight`, linkMe]}>Resume</Link>
        <Link activeClassName="current-page" to="/blog" css={[tw`m-1 text-base font-medium leading-tight`, linkMe]}>Blog</Link>
        <Link activeClassName="current-page" to="/contactMe" css={[tw`m-1 text-base font-medium leading-tight`, linkMe]}>Contact me!</Link>
      </nav>
    </header >
  )
}

export default Header