import React from 'react'
import { StyledInfoSection, Body, Image } from './styles/InfoSection.styled'

const InfoSection = ({ title, description, image, imageAlignment }) => {
    return (
        <StyledInfoSection imageAlignment={imageAlignment}>
            <Body>
                <h1>{title}</h1>
                <p>{description}</p>
            </Body>
            <div>
                <Image src={image} alt={title} />
            </div>
        </StyledInfoSection>
    )
}

export default InfoSection