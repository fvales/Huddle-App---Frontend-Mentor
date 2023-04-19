import React from 'react'
import screen_mockup from '../images/screen-mockups.svg'
import { Statistics, StatisticsSection, StatisticsInfo } from './styles/Statistics.styled'
import icon_communities from '../images/icon-communities.svg'
import icon_messages from '../images/icon-messages.svg'
import InfoSection from './InfoSection'
import your_users from '../images/illustration-your-users.svg'
import grow_together from '../images/illustration-grow-together.svg'
import flowing_conversation from '../images/illustration-flowing-conversation.svg'
import { Button } from './styles/Button.styled'
import { CommunitySection } from './styles/Community.styled'
import top_desktop_bg_1 from '../images/bg-section-top-desktop-1.svg'
import top_mobile_bg_1 from '../images/bg-section-top-mobile-1.svg'
import bottom_desktop_bg_1 from '../images/bg-section-bottom-desktop-1.svg'
import bottom_mobile_bg_1 from '../images/bg-section-bottom-mobile-1.svg'
import top_desktop_bg_2 from '../images/bg-section-top-desktop-2.svg'
import top_mobile_bg_2 from '../images/bg-section-top-mobile-2.svg'
import bottom_desktop_bg_2 from '../images/bg-section-bottom-desktop-2.svg'
import bottom_mobile_bg_2 from '../images/bg-section-bottom-mobile-2.svg'

const Main = () => {
    return (
        <>
            <StatisticsSection>
                <picture>
                    <source srcSet={screen_mockup} />
                    <img src={''} alt='screen mockup' />
                </picture>
                <Statistics>
                    <StatisticsInfo>
                        <img src={icon_communities} alt='' />
                        <h3>1.4K+</h3>
                        <span>Communities Formed</span>
                    </StatisticsInfo>
                    <StatisticsInfo>
                        <img src={icon_messages} alt='' />
                        <h3>2.7m+</h3>
                        <span>Messages Sent</span>
                    </StatisticsInfo>
                </Statistics>
            </StatisticsSection>
            <InfoSection
                title='Grow Together'
                hasBg={true}
                bgDesktopTop={top_desktop_bg_1}
                bgDesktopBottom={bottom_desktop_bg_1}
                bgMobileTop={top_mobile_bg_1}
                bgMobileBottom={bottom_mobile_bg_1}
                description='Generate meaningful discussions with your audience and build a strong, loyal community. 
            Think of the insightful conversations you miss out on with a feedback form.'
                image={grow_together}
            />
            <InfoSection
                title='Flowing Conversations'
                description="You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
            just-in-time loading for a more natural flow."
                image={flowing_conversation}
                hasBg={false}
                imageAlignment='left' />
            <InfoSection
                title='Your Users'
                hasBg={true}
                bgDesktopTop={top_desktop_bg_2}
                bgDesktopBottom={bottom_desktop_bg_2}
                bgMobileTop={top_mobile_bg_2}
                bgMobileBottom={bottom_mobile_bg_2}
                description="It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
            once signed in to your app, your users can start chatting immediately."
                image={your_users} />

            <CommunitySection>
                <h2>Ready To Build Your Community?</h2>
                <Button kind="primary">Get Started For Free</Button>
            </CommunitySection>
        </>
    )
}

export default Main