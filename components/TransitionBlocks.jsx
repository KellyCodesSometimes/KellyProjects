import React, { useState, useRef } from 'react'
import { useTransition, useSpring, useChain, config } from 'react-spring'
import { Global, Container, Item } from './styles'
import ProjectDialog from './projectDialog';
import ThreeJsContent from './projects/threejs/threeJsContext';
import QuadruplexContent from './projects/quadruplex/quadruplexContext';
import AboutContent from './aboutContent';
import MusicianPortfolio from './projects/musicianPortfolio/musicianPortfolio';
import Inspiration from './projects/inspiration/inspiration';
import MedicalAdherence from './projects/medicalAdherence/medicalAdherence';
import YoutubeParty from './projects/youtubeParty/youtubeParty';
import CVGenerator from './projects/cvGenerator/cvGenerator'; 
import Image from 'next/image'

export default function TransitionBlocks({ title, childBlocks }) {
    const [open, set] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [showProjectsText, setShowProjectsText] = useState(true);
    const [projectTitle, setProjectTitle] = useState("");

    const projectContents = {
        "Quadruplex": <QuadruplexContent />, "ThreeJs": <ThreeJsContent />,
        "Musician Portfolio": <MusicianPortfolio />, "Inspo & Sources": <Inspiration />, "Medical Adherence V1": <MedicalAdherence />,
        "Youtube Party": <YoutubeParty/>, "CV Gen": <CVGenerator/>
    }

    const lavender = '#E2D1F9'

    const springRef = useRef()
    const { size, opacity, ...rest } = useSpring({
        ref: springRef,
        config: config.stiff,
        from: { size: '20%', background: 'hotpink', marginRight: 5 },
        to: { size: open ? title === "Projects" ? "100%" : '60%' : '20%', background: open ? 'white' : lavender }
    })

    const transRef = useRef()

    const childBlockTransitions = useTransition(open ? childBlocks : [], item => item.name, {
        ref: transRef,
        unique: true,
        trail: 400 / childBlocks,
        from: { opacity: 0, transform: 'scale(0)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0)' }
    })

    useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])

    const handleItemClick = (e, item) => {
        if (item.content !== "Close") {
            e.stopPropagation();
            setProjectTitle(item.name)
            setDialogOpen(true);
        }
    }

    const projectTabOpen = open && title === "Projects";
    return (
        <>
            <Global />
            <Container key={title} style={{ ...rest, width: projectTabOpen ? "90vw" : open ? "33%" : "20%", height: projectTabOpen ? "90vh" : size, position: projectTabOpen ? 'absolute' : 'relative', zIndex: projectTabOpen ? '1' : '0' }} onClick={() => {
                set(open => !open)
                setTimeout(function () {
                    setShowProjectsText(show => !show);
                }, showProjectsText ? 0 : 1000);
            }}>
                {showProjectsText && <div style={{ marginTop: 40 }} className="logo">{title}</div>}
                {childBlockTransitions.map(({ item, key, props }) => (
                    <Item key={key} onClick={(e) => handleItemClick(e, item)} style={{ ...props, background: item?.css || 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', display: title === "About" ? "inline-grid" : "inherit" }}>
                        <div style={{ display: "inline-grid" }}>
                            <div className="logo" style={{ marginTop: 0 }}>
                                {
                                    typeof item?.content === "string" || !item?.content ? item?.content : <Image layout='fill' src={item.content} />
                                }
                            </div>
                        </div>
                    </Item>
                ))}
                {open && !showProjectsText && title === "About" && <AboutContent />}
            </Container>
            {dialogOpen && <ProjectDialog setDialogOpen={setDialogOpen} projectTitle={projectTitle} projectDescriptionAndVideo={projectContents[projectTitle]} />}
        </>
    )
}