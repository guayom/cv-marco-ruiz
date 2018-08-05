import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Menu = styled.nav`
  display: none;

  ${breakpoint('tablet')`
    display: block;
    position: fixed;
    top: 0;
    left: 350px;
    right: 0;
    height: auto;
    padding: 0 45px;
    z-index: 9;
    background: #f0f0f0;

    ul {
      list-style: none;
      margin: 0;
      display: block;
    }

    li {
      display: inline-block;
      align-items: center;
      height: 100%;
      margin: 0 20px 0 0;
      flex: 1 0;
      padding: 20px 0;
    }

    a {
      text-decoration: none;
      color: #464650;
      font-size: 14px;
    }
  `}

  @media print {
    display: none;
  }
`

class Navigation extends React.Component {

  constructor(props){
    super(props);
  }

  render () {
    return (
      <Menu>
        <ul>
          <li><AnchorLink href='#about' offset='70'>About me</AnchorLink></li>
          <li><AnchorLink href='#work' offset='70'>Work</AnchorLink></li>
          <li><AnchorLink href='#education' offset='70'>Education</AnchorLink></li>
          <li><AnchorLink href='#music' offset='70'>Music</AnchorLink></li>
          <li><AnchorLink href='#skills' offset='70'>Skills</AnchorLink></li>
          <li><AnchorLink href='#contact' offset='70'>Contact</AnchorLink></li>
        </ul>
      </Menu>
    )
  }
}

export default Navigation