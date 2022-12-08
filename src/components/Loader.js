import React from 'react'
import styled, { keyframes } from 'styled-components'

export const Loader = () => {
  const colors = keyframes`
    to {
    opacity: .1;
    transform: translate3d(0, -1rem, 0);
    }
  `

 const LoaderSpan = styled.span `
    width: 4px;
    height: 4px;
    border-radius: 50px;
    background: #ff0090;
    animation: ${colors} .6s infinite alternate;
 ` 

  return (
    <>
        <LoaderSpan></LoaderSpan>
        <LoaderSpan></LoaderSpan>
        <LoaderSpan></LoaderSpan>
    </>
  )
}
