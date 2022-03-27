import dna from '/public/dna.svg'
import cube from '/public/cube.svg'

import cv from '/public/cv.svg'
import doc from '/public/doc.svg'
import music from '/public/music.svg'
import pill from '/public/pill.svg'
import youtube from '/public/youtube.svg'

export default class TransitionBlockDetails {
    name: string;
    description?: string;
    css?: string;
    height: number;
    content: string;
    constructor(
        name: string,
        content: string,
        description?: string,
        css?: string,
    ) {
        this.name = name;
        this.description = description || '#a8edea → #fed6e3';
        this.css = css;
        this.height = 200;
        this.content = content;
    }
}

const aboutBlock = new TransitionBlockDetails('About Me', '#a8edea → #fed6e3', '', '')
const projectsBlock = new TransitionBlockDetails('Projects Block', '#f5f7fa → #c3cfe2', '', '')
const tutorials = new TransitionBlockDetails('Tutorials Block', '#e0c3fc → #8ec5fc', '', 'Tutorials Block')

const homepageBlocks = [aboutBlock, projectsBlock, tutorials];

const quadruplexBlock = new TransitionBlockDetails("Quadruplex", dna)
const threeJsBlock = new TransitionBlockDetails("ThreeJs", cube)
const cvGenBlock = new TransitionBlockDetails("CV Gen", cv)

const medAdherenceBlock = new TransitionBlockDetails("Medical Adherence V1", pill)
const reportListBlock = new TransitionBlockDetails("Report List", doc)
const musicianPortfolioBlock = new TransitionBlockDetails("Musician Portfolio", music)
const youtubePartyBlock = new TransitionBlockDetails("Youtube Party", youtube)

const organiserBlock = new TransitionBlockDetails("Organiser", music)



const inspoBlock = new TransitionBlockDetails("Inspo & Sources", "Inspo & Sources")
const closeBlock = new TransitionBlockDetails("Close", "Close")

const projectBlocks = [quadruplexBlock, threeJsBlock, cvGenBlock, medAdherenceBlock, reportListBlock, musicianPortfolioBlock, youtubePartyBlock, organiserBlock, inspoBlock, closeBlock]

const tutorialsBlocks: TransitionBlockDetails[] = []

export { homepageBlocks, projectBlocks, tutorialsBlocks }