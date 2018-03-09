import styled from 'styled-components'

const Item = styled.div`
  margin-bottom: 30px;
`

const Title = styled.h3`
  margin: 0px;
  font-size: 12pt;
  line-height: 20pt;
`

const Institution = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`

const Year = styled.p`
  color: #777;
  margin-bottom: 5px;
`

const Description = styled.p`
  color: #333;
  margin-bottom: 5px;
`

export default {
  Item, Title, Institution, Year, Description
}