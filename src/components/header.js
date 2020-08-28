import React from "react"
import { Link } from "gatsby"
import tw, { css } from "twin.macro"

const padMe = css`
  padding : 0.5rem calc((100vw - 550px)/2);
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
      <Link to="/" className={tw`text-base font-medium leading-tight`}>Martin Sesto</Link>
      <nav css={tw``}>
        <Link activeClassName="current-page" to="/About" css={[tw`p-8 text-base font-medium leading-tight`, linkMe]}>About</Link>
        <Link activeClassName="current-page" to="/Projects" css={[tw`p-8 text-base font-medium leading-tight`, linkMe]}>Projects</Link>
        <Link activeClassName="current-page" to="/Technologies" css={[tw`p-8 text-base font-medium leading-tight`, linkMe]}>Technologies</Link>
        <Link activeClassName="current-page" to="/Resume" css={[tw`p-8 text-base font-medium leading-tight`, linkMe]}>Resume</Link>
        <Link activeClassName="current-page" to="/contactMe" css={[tw`p-8 text-base font-medium leading-tight`, linkMe]}>Contact me!</Link>
      </nav>
    </header >
  )
}

export default Header