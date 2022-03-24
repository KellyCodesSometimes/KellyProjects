import React from 'react'
import Image from 'next/image'

interface Props {
    projectSummary: string;
    technicalStack: string[];
    contextItems: string[];
    video?: any
}

export default function DescriptionTemplate({ projectSummary, technicalStack, contextItems, video }: Props) {
    return (
        <div style={{ display: "inline-flex" }}>
            <div>
                <h2 style={{ padding: 0, margin: 0 }}>{projectSummary}</h2>
                {technicalStack.length > 0 &&
                    <>
                        <h3>Technical Stack:</h3>
                        <ul>
                            {technicalStack.map(stackItem => <li key={stackItem}>{stackItem}</li>)}
                        </ul>
                    </>
                }

                <h3>{technicalStack.length > 0 ? "Context:" : "Sources"}</h3>
                <ul>
                    {contextItems.map(stackItem => <li key={stackItem}>{stackItem}</li>)}
                </ul>
            </div>
            {video && <div style={{ position: "relative", height: "50vh", width: "100%", marginLeft: 100, marginTop: "5%", marginRight: 0 }}>
                <Image alt={"Demo of project"} src={video} layout="intrinsic" />
            </div>}
        </div>
    )
}