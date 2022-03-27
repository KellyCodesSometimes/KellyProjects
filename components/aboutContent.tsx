import React from 'react'

export default function AboutContent() {
    return (
        <>
            <div className="logo" style={{ position: "absolute", margin: 25, textAlign: "left" }}>About</div>
            <div style={{ position: "absolute", margin: 25, marginTop: 35, textAlign: "left" }}>
                <h4 style={{ fontWeight: 'bold', marginTop: 50 }}> Experience </h4>
                <h5 style={{ fontWeight: 400 }}>&#9745; Senior typescript engineer with several years&apos; working in tech companies, including a Skin Cancer Diagnostics AI company, an Autonomous Driving AI solution company, a Medications Adherence company, and an energy company. Before working in tech, I spent several years in different industries, including in Dentistry, Engineering, snd Science.</h5>
                <h5 style={{ fontWeight: 400 }}>&#9745; Experience doing Full Stack work and having sole/majority ownership over codebases and relevant architectural decisions </h5>
                <h5 style={{ fontWeight: 400 }}>&#9745; Language agnostic - deep understanding of logic and able to switch languages where necessary. Largely used Ts, Js, Python, PHP, and C#. </h5>
                <button style={{
                    border: "none", marginTop: 10, padding: 16, background: "#E2D1F9", color: "white",
                    fontFamily: "Spartan", fontWeight: "bold", borderRadius: 10
                }}>Download My CV</button>
            </div>
        </>
    )
}