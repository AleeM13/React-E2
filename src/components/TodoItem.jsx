import React from 'react'
import styled from 'styled-components'

const Tasks = styled.div `
    color: #fff;
    height: 25px;
    width: 350px;
    text-align: center;
    border: 1px solid #fff;
    background: transparent;
`

export default function TodoItem(props) {
  return (
    <>
        <Tasks>{props.todo.text}</Tasks>
    </>
  )
}
