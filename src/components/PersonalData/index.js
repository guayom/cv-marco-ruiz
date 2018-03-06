import React from 'react'
import ProfilePic from './profilePic'
import styled from 'styled-components'

const Container = styled.div`
    flex: 2 0;
    background: ${props => props.mainColor};
    margin-right: 20px;
    color: #fff;
`

export default ({image, mainColor, name, jobTitle}) => (
    <Container mainColor={mainColor}>
        <ProfilePic
            name={name}
            jobTitle={jobTitle}
            image={image}
        />
    </Container>
)