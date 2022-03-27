import React from 'react'
import video from '/public/ytparty1.gif'
import DescriptionTemplate from '../templates/descriptionTemplate'

export default function YoutubeParty() {
    return (
        <DescriptionTemplate projectSummary={'Ability to watch youtube in real time with others.'}
            technicalStack={['React, Express, Socket.io']}
            contextItems={[
                "This app was inspired by Netflix party - the browser extension where you can watch Netflix with others.",
                "Functionality includes: ability to play and pause everyone's videos, queue videos, load new videos by URL, a chat functionality, scrub videos for everyone and see scrubbing in real-time",
                "Demo to the right shows the play and pause functionality. Additional features can be demo-ed by request to keep the video short :)"
            ]}
            video={video} />
    )
}