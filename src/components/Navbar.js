import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Navbar = () => {
    const NavContainer = styled.nav `
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: 5px;
        font-size: 16px;
    `

    const Navlist = styled.ul `
        display: flex;
        justify-content: center;
        gap: 20px;
        border: 1px solid #e9e9e9;
    `

    const LinkItem = styled(NavLink) `
        color: #fff;
        text-decoration: none;
        padding: 8px;
        letter-spacing: 1.2px;
        :hover {
            color: #ff0090;
        }
    `

  return (
    <>
        <NavContainer>
            <Navlist>
                <LinkItem to="/">Home</LinkItem>
                <LinkItem to="/To-do">To Do</LinkItem>
                <LinkItem to="/Pokemons">Pokemons</LinkItem>
            </Navlist>
        </NavContainer>
    </>
  )
}
