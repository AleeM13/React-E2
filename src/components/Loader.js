import React from 'react'
import styled, { keyframes } from 'styled-components'

export const Loader = () => {
  const ContainerLoaders = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 7%;
  `

  const colors = keyframes`
    to {
    opacity: .1;
    transform: translate3d(0, -1rem, 0);
    }
  `

 const LoaderSpan = styled.span `
    width: 15px;
    height: 15px;
    border-radius: 50px;
    background: #ff0090;
    animation: ${colors} .6s infinite alternate;
 ` 

  return (
    <>
      <ContainerLoaders>
        <LoaderSpan></LoaderSpan>
        <LoaderSpan></LoaderSpan>
        <LoaderSpan></LoaderSpan>
      </ContainerLoaders>
    </>
  )
}
