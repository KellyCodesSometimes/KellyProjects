import { animated } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, p {
    font-family: "Playball", cursive; /* Google font for the header */
  }
 .app {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    user-select: none;
    background: #317773;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  user-select: none;
  font-size: 4vh;
  font-family: 'Pacifico', cursive;
  color: #fee;
  text-shadow: 0 -40px 20px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #317773, 0 0 0.1em #ff4444, 0 3px 3px #000;
}
`

const Container = styled(animated.div)`
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(8, minmax(35px, 1fr));
  grid-gap: 10px;
  padding: 25px;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
`

const Item = styled(animated.div)`
  width: 100%;
  height: 50%;
  background: white;
  border-radius: 5px;
  will-change: transform, opacity;
`

export { Global, Container, Item }