import React from 'react'
import { PrimaryButton } from './styles/Button.styled'
import { StyledBanner } from './styles/Banner.styled'

const Banner = () => {
    return (
        <StyledBanner>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>Huddle re-imagines the way we build communities. You have a voice, but so does
                your audience. Create connections with your users as you engage in genuine discussion.</p>
            
            <PrimaryButton>
                get started for free
            </PrimaryButton>
        </StyledBanner>
    )
}

export default Banner