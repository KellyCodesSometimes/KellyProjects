import React from 'react'
import video from '/public/cvgen.gif'
import DescriptionTemplate from '../templates/descriptionTemplate'

export default function CVGenerator() {
    return (
        <DescriptionTemplate projectSummary={'Creates a CV from job history details.'}
            technicalStack={['React, Express']}
            contextItems={[
                "This app is still a WIP. At the moment we're generating a pretty boring looking CV - the idea is to introduce a variety of styles. The current functionality is just core functionality.",
                "I was inspired to make this from looking at Microsoft templates, and seeing that some were considered a 'premium' template. I wanted to be able to make service where anyone can make an appealing CV in a few simple steps."
            ]}
            video={video} />
    )
}