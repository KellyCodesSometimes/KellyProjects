import React from 'react'
import video from '/public/musician_portfolio.gif'
import DescriptionTemplate from '../templates/descriptionTemplate'

export default function MusicianPortfolio() {
    return (
        <DescriptionTemplate projectSummary={'A friend wanted a website to market his music.'}
            technicalStack={['Frontend: React - Ts']}
            contextItems={[
                "I'm not sure if you've ever done work for a friend before, but the specs you get given are... different. It was great fun though!",
                "The specs were as follows:",
                "'Blueish' palette",
                "Use Bonobo's website for inspiration",
                "Flashy stuff in the background",
                "I chose a warmer palette with blue highlights as I felt this represented the tone of his music better, and thus his brand more accurately. I've removed his details from the demo video for privacy."
            ]}
            video={video} />
    )
}