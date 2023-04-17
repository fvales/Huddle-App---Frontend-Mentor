import React from 'react'
import { FooterWave, StyledContent, SocialMediaImage, SocialMediaSection, FormSection } from './styles/Footer.styled'
import logo from '../images/logo-white.svg'
import phone_logo from '../images/icon-phone.svg'
import email_icon from '../images/icon-email.svg'
import bg_footer_desktop from '../images/bg-footer-top-desktop.svg';
import bg_footer_mobile from '../images/bg-footer-top-mobile.svg';
import facebook_logo from '../images/logo-facebook.svg'
import twitter_logo from '../images/logo-twitter.svg'
import instagram_logo from '../images/logo-instagram.svg'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'

const Footer = () => {
    return (
        <Flex direction="column" as="footer">

            {/* Footer Wave  */}
            <FooterWave>
                <source media="(min-width: 768px)" srcset={bg_footer_desktop} />
                <source media="(max-width: 768px)" srcset={bg_footer_mobile} />
                <img src={''} alt="footer" draggable="false"/>
            </FooterWave>

            {/* Address and Newsletter section  */}
            <StyledContent>
                <Flex as="article" direction="column" gap="1rem">
                    <h3>Newsletter</h3>
                    <p>
                        To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never
                        send you spam or pass on your email address
                    </p>
                    <FormSection>
                        <label for="email" className='sr-only'>e-mail</label>
                        <input type='e-mail' name='email' id='email' />
                        <Button type='submit' kind='primary'>Subscribe</Button>
                    </FormSection>
                </Flex>
                <Flex direction="column" gap="2rem">
                    <picture>
                        <source srcset={logo} />
                        <img src={logo} alt='logo' />
                    </picture>
                    <Flex direction="column" gap="1rem" as="address">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia
                        vestibulum a, ultrices quis sem.
                        <Flex gap="1rem">
                            <img src={phone_logo} alt='phone' />
                            <span>Phone: +1-543-123-4567</span>
                        </Flex>
                        <Flex gap="1rem">
                            <img src={email_icon} alt='e-mail' />
                            <span>example@huddle.com</span>
                        </Flex>
                    </Flex>
                </Flex>
            </StyledContent>
            {/* Social Media Section  */}
            <Flex gap="1rem" as={SocialMediaSection}>
                <SocialMediaImage src={facebook_logo} alt='facebook' />
                <SocialMediaImage src={instagram_logo} alt='instagram' />
                <SocialMediaImage src={twitter_logo} alt='twitter' />
            </Flex>
        </Flex>
    )
}

export default Footer