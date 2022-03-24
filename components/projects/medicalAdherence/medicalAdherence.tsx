import React from 'react'
import video from '/public/pill.gif'
import DescriptionTemplate from '../templates/descriptionTemplate'

export default function MedicalAdherence() {
    return (
        <DescriptionTemplate projectSummary={'App that allows tracking of medical aherence.'}
            technicalStack={['React, Apollo hooks, Hasura (gql, connecting to a postgres db)']}
            contextItems={[
                "I made this app based upon an SVG found on a company website for a job I applied for, and I was offered the job.",
                "The dots on the pill packet symbolise whether medication has been taken on time, late, missed, or if there's no reported data.",
                "This information is stored in a postgres database and uses a gql api."
            ]}
            video={video} />
    )
}