import React from 'react'
import { StyledInfoSection, Body, Image } from './styles/InfoSection.styled'

const InfoSection = ({ title, description, image, imageAlignment, hasBg,
    bgDesktopTop, bgDesktopBottom, bgMobileTop, bgMobileBottom }) => {
    return (
        <StyledInfoSection
            imageAlignment={imageAlignment} hasBg={hasBg}
            bgDesktopTop={bgDesktopTop}
            bgDesktopBottom={bgDesktopBottom}
            bgMobileTop={bgMobileTop}
            bgMobileBottom={bgMobileBottom}>
            <Body>
                <h2>{title}</h2>
                <p>{description}</p>
            </Body>
            <div>
                <Image src={image} alt={title} />
            </div>
        </StyledInfoSection>
    )
}

export default InfoSection