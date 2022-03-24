import React from 'react'
import video from '/public/musician_portfolio.gif'
import DescriptionTemplate from '../templates/descriptionTemplate'

export default function Inspiration() {
    return (
        <DescriptionTemplate projectSummary={"Sources I've taken inspiration from"}
            technicalStack={[]}
            contextItems={[
                "I've worked on and off on these projects over the past few years and so if there's any missing links please get in touch and I will be more than happy to add them here. Any lack of credit is non-intentional and will be recitfied upon notice immediately. Thanks!",
                "React Spring CodeSandbox: https://codesandbox.io/s/2v716k56pr - spring logic and colour palette as I thought the palette fit with the friendly, lively feel I wanted to portray. I've refactored and developed upon this logic for my specific use case.",
                "The brain (ThreeJs project) was a model I found on the internet (link pending as this was lost on an old laptop), which I then changed the file format, traversed the nodes and wireframed, and rendered in a 3d scene.",
                "The background in the musician portfolio is a gif I found on giphy (link pending as this has also been lost)."
            ]}
             />
    )
}