import React from 'react'

export default function AboutContent() {
    return (
        <>
            <div className="logo" style={{ position: "absolute", margin: 25, textAlign: "left" }}>About</div>
            <div style={{ position: "absolute", margin: 25, marginTop: 35, textAlign: "left" }}>
                <h3 style={{ marginTop: 50 }}>Hi, I&apos;m Kelly.</h3>
                <h4 style={{ fontWeight: 'bold' }}> Experience </h4>
                <h5 style={{ fontWeight: 400 }}>&#9745; Several years&apos; experience working in tech companies.</h5>
                <h5 style={{ fontWeight: 400 }}>&#9745; Experience doing Full Stack work and having sole/majority ownership over codebases and relevant architectural decisions </h5>
                <h5 style={{ fontWeight: 400 }}>&#9745; Language agnostic - deep understanding of logic and able to switch languages where necessary. Largely used Ts, Js, Python, PHP, and C#. </h5>
                <button style={{
                    border: "none", marginTop: 10, padding: 16, background: "hotpink", color: "white",
                    fontFamily: "Spartan", fontWeight: "bold", borderRadius: 10
                }}>Download My CV</button>
            </div>
        </>
    )
}