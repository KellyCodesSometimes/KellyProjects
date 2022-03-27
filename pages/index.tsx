import '../styles/Home.module.css'
import React from 'react'
import TransitionBlocks from '../components/TransitionBlocks'
import github from '/public/GitHub-Mark-32px.png'
import mail from '/public/mail.png'
import Image from 'next/image'
import { projectBlocks, tutorialsBlocks } from '../components/TransitionBlockDetails'

export default function App() {
  return (
    <>
      <div className="app">
        <TransitionBlocks title={"About"} childBlocks={[]} />
        <TransitionBlocks title={"Projects"} childBlocks={projectBlocks}/>
        <TransitionBlocks title={"Tutorials"} childBlocks={tutorialsBlocks} />
      </div>
      <div style={{ position: "absolute", bottom: "3vh", height: "7vh", alignContent: "center", alignItems: "center", display: "inline-flex", marginLeft: 15}}>
        <a href={"https://github.com/K-A-Ball"}><Image alt="view my github" color="white" src={github}  layout="intrinsic"  /></a>
        <a href="mailto:missk_a_ball@outlook.com"><Image alt="mail me" color='white' width={50} height={50} src={mail} layout="intrinsic"  /></a>
      </div>
    </>
  )
}