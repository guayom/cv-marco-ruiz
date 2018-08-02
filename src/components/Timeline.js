import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const ItemContainer = styled.div`
  ${breakpoint('tablet')`
    display: grid;
    grid-template-columns: 2fr 5fr;
  `}
`

const TitleContainer = styled.div`
  ${ breakpoint('tablet')`
    text-align: right;
    border-right: solid 1px;
    padding-right: 20px;
    margin-right: 20px;
    padding-bottom: 20px;
    position: relative;

    &:after {
      content: " ";
      width: 13px;
      height: 13px;
      background: #464650;;
      position: absolute;
      right: -7px;
      top: 3px;
      border-radius: 50%;
      border: solid 3px #fff;
    }
  `}
`

const DescriptionContainer = styled.div`
  ${ breakpoint('tablet')`
    padding-bottom: ${props => props.last ? '0' : '40px'};
  `}
`

const Time = styled.p`
  color: #777;
  margin: 0;
`

const Title = styled.h3`
  font-size: 16px;
  margin: 0;
  text-transform: uppercase;
`

const SubTitle = styled.p`
  margin-bottom: 5px;
  font-weight: bold;
`

const Items = styled.ul`
  margin: 0;
  list-style: none;

  li {
    margin-bottom: 0;
  }
`

const Timeline = ({ last, start, end, title, subtitle, items }) => (
  <ItemContainer>
    <TitleContainer>
      <Time>{start}-{end}</Time>
      <Title>{title}</Title>
    </TitleContainer>
    <DescriptionContainer last={last}>
      <SubTitle>{subtitle}</SubTitle>
      <Items>
        {items.map((item, i) =>
          <li key={i}>{item}</li>
        )}
      </Items>
    </DescriptionContainer>
  </ItemContainer>
)

export default Timeline