import React from 'react'
import { Button } from './styles/Button.styled'
import { StyledBanner } from './styles/Banner.styled'

const Banner = () => {
    return (
        <StyledBanner>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>Huddle re-imagines the way we build communities. You have a voice, but so does
                your audience. Create connections with your users as you engage in genuine discussion.</p>
            
            <Button kind="primary">get started for free</Button>
        </StyledBanner>
    )
}

export default Banner