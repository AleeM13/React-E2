import React from 'react'
import { Navbar } from '../components/Navbar';
import styled, { keyframes } from 'styled-components'
import './App.css';

export const Home = () => {

  const Section = styled.section `
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px);
  `

  const ContainerTittle = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 35px;
    border: 3px solid #ff0090;
    border-radius: 5px;
  `

  const typing = keyframes`
    from {
    width: 0;
    }
  `

  const StyledTittle = styled.h1 `
    display: block;
    color: #fff;
    font-size: 30px;
    white-space: nowrap;
    border-right: 3px solid;
    width: 20ch;
    animation: ${typing} 2s steps(20);
    overflow: hidden;
  `

  return (
    <>
      <Navbar/>
      <Section>
        <ContainerTittle>
        <StyledTittle>Welcome to my page!</StyledTittle>
        </ContainerTittle>
      </Section>
    </>
  )
}
