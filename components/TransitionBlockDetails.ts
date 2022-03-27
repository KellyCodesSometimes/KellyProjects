export default class TransitionBlockDetails {
    name: string;
    description: string;
    css: string;
    height: number;
    content: string;
    constructor(
        name: string,
        description: string,
        css: string,
        content: string
    ) {
        this.name = name;
        this.description = description;
        this.css = css;
        this.height = 200;
        this.content = content;
    }
}

const aboutBlock = new TransitionBlockDetails('About Me', '#a8edea → #fed6e3', '', '')
const projectsBlock = new TransitionBlockDetails('Projects Block', '#f5f7fa → #c3cfe2', '', '')
const tutorials = new TransitionBlockDetails('Tutorials Block', '#e0c3fc → #8ec5fc', '', 'Tutorials Block')

const homepageBlocks = [aboutBlock, projectsBlock, tutorials];

const quadruplexBlock = new TransitionBlockDetails("Quadruplex", '#a8edea → #fed6e3', 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', "Quadruplex")
const threeJsBlock = new TransitionBlockDetails("ThreeJs", '#f5f7fa → #c3cfe2', 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', "ThreeJs")
const cvGenBlock = new TransitionBlockDetails("CV Gen", '#e0c3fc → #8ec5fc', 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)', "CV Generator")

const medAdherenceBlock = new TransitionBlockDetails("Medical Adherence V1", '#e0c3fc → #8ec5fc', 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)', "Medical Adherence V1")
const reportListBlock = new TransitionBlockDetails("Report List", '#e0c3fc → #8ec5fc', 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)', "Report List Gen")
const musicianPortfolioBlock = new TransitionBlockDetails("Musician Portfolio", '#e0c3fc → #8ec5fc', 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)', "Musician Portfolio")
const youtubePartyBlock = new TransitionBlockDetails("Youtube Party", '#e0c3fc → #8ec5fc', 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)', "Youtube Party")

const inspoBlock = new TransitionBlockDetails("Inspo & Sources", '#e0c3fc → #8ec5fc', 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)', "Inspo & Sources")
const closeBlock = new TransitionBlockDetails("Close", '#e0c3fc → #8ec5fc', 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)', "Close")

const projectBlocks = [quadruplexBlock, threeJsBlock, cvGenBlock, medAdherenceBlock, reportListBlock, musicianPortfolioBlock, youtubePartyBlock, inspoBlock, closeBlock]

const tutorialsBlocks: TransitionBlockDetails[] = []

export { homepageBlocks, projectBlocks, tutorialsBlocks }