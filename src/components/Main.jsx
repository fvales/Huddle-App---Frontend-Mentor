import React from 'react'
import screen_mockup from '../images/screen-mockups.svg'
import { Statistics, StatisticsSection, StatisticsInfo } from './styles/Statistics.styled'
import icon_communities from '../images/icon-communities.svg'
import icon_messages from '../images/icon-messages.svg'
import InfoSection from './InfoSection'
import your_users from '../images/illustration-your-users.svg'
import grow_together from '../images/illustration-grow-together.svg'
import flowing_conversation from '../images/illustration-flowing-conversation.svg'

const Main = () => {
    return (
        <>
            <StatisticsSection>
                <picture>
                    <source srcset={screen_mockup} />
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
                description='Generate meaningful discussions with your audience and build a strong, loyal community. 
            Think of the insightful conversations you miss out on with a feedback form.'
                image={grow_together}
                />
            <InfoSection
                title='Flowing Conversations'
                description="You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
            just-in-time loading for a more natural flow."
                image={flowing_conversation}
                imageAlignment='left' />
            <InfoSection
                title='Your Users'
                description="It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
            once signed in to your app, your users can start chatting immediately."
                image={your_users} />
        </>
    )
}

export default Main