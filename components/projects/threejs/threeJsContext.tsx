import React from 'react'
import threeVideo from '/public/ThreeJs.gif'
import DescriptionTemplate from '../templates/descriptionTemplate'

export default function ThreeJsContent() {
    return (
        <DescriptionTemplate projectSummary={'A project made to consolidate ThreeJs basics.'}
            technicalStack={['Frontend: React - Js, THREE Js']}
            contextItems={[
                "I've previously worked in a technical team where we used THREEJs in order to display sensor data to users in an understandable format in order to aid their workflows.",
                "To see how I could transform a generic model and make it look more visually appealing.",
                "The basic application was initially made with an AI company in mind, hence the decision to choose a model of a brain, and to wireframe the object so that the nodes looked like neurons."
            ]}
            video={threeVideo} />
    )
}