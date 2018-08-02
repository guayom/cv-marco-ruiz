import React from "react";
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const PanelContainer = styled.div`
  background: #fff;
  margin: 10px;
  box-shadow: 0 4px 35px 0 rgba(23,55,87,.1), 0 5px 15px 0 rgba(0,0,0,.07);
  border-radius: 4px;
  overflow: hidden;

  &:last-of-type {
    margin-bottom: 30px;
  }

  ${breakpoint('tablet')`
    margin-bottom: ${props => props.last ? 0 : `10px`};
  `}
`

const Title = styled.h2`
  font-size: 16px;
  margin: 0;
  text-transform: uppercase;
  background: #464650;
  padding: 10px 30px;
  color: #fff;
`

const PanelContent = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 17pt;
  letter-spacing: .05em;
  font-weight: 300;
  padding: 30px;
`

const Panel = ({title, children, last}) => (
  <PanelContainer last={last}>
    <Title>{title}</Title>
    <PanelContent>
      {children}
    </PanelContent>
  </PanelContainer>
)
export default Panel