// src/components/snowfall.js
import React, { useMemo } from "react"
import styled, { keyframes } from "styled-components"

const snowfall = keyframes`
  0% {
    transform: translate3d(0, -100%, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(1.5rem, 100vh, 0) rotate(360deg);
  }
`

const SnowflakeWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1000;
  overflow: hidden;
`

const Snowflake = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: white;
  border-radius: 50%;
  opacity: ${props => props.opacity};
  top: -5vh;
  animation: ${snowfall} ${props => props.duration}s linear infinite;
  animation-delay: ${props => props.delay}s;
  left: ${props => props.left}%;
  filter: blur(1px);
`

const Snowfall = ({ snowflakeCount = 50 }) => {
  const snowflakes = useMemo(() => {
    return [...Array(snowflakeCount)].map((_, index) => ({
      id: index,
      left: Math.random() * 100,
      size: Math.random() * 3 + 2,
      opacity: Math.random() * 0.6 + 0.2,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * -20,
    }))
  }, [snowflakeCount])

  return (
    <SnowflakeWrapper aria-hidden="true">
      {snowflakes.map(flake => (
        <Snowflake
          key={flake.id}
          left={flake.left}
          size={flake.size}
          opacity={flake.opacity}
          duration={flake.duration}
          delay={flake.delay}
        />
      ))}
    </SnowflakeWrapper>
  )
}

export default Snowfall
