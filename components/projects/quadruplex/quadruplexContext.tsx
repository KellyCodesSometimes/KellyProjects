import React from 'react'
import video from '/public/QuadruplexApp.gif'
import DescriptionTemplate from '../templates/descriptionTemplate'

export default function QuadruplexContent() {
    return (
        <DescriptionTemplate projectSummary={'A project made as part of a technical test, that subsequented in a job offer.'}
            technicalStack={['Frontend: React - Ts', 'Backend: FastApi - Python']}
            contextItems={[
                "You should assume that the length of the array is at most 27 sequences long.",
                "The number of bases in any single sequence is no more than 100.",
                "An important property for synthesis of oligos is the number of G’s in a row. As it turns out, having 4 or more consecutive G’s drastically reduces the yield.",
                "Your task is to construct an API “/api/quadruplex” that accepts the above JSON and returns a number of useful factors:",
                "It should only return sequences which have at least 4 consecutive G",
                "For those sequences it should return the start an end positions of all the G’s",
                "Finally it should return the number of subsequences that have at least four consecutive G’s"
            ]}
            video={video} />
    )
}