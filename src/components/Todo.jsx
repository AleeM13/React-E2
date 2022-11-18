import React, { useState } from 'react'
import { Input } from '@chakra-ui/react'
import styled from 'styled-components';

const TodoContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
`
const Title = styled.h2 `
    font-size: 24px;
    font-weight: 500;
    color: #fff;
`

const StyledInput = styled(Input) `
    width: 350px;
    height: 30px;
    border: 1px solid #fff;
    border-radius: 8px;
    background: #333;
    color: #fff;
    outline: none;
    padding: 7px;
    font-size: 12px;
    ::placeholder {
        color: #fff;
        font-weight: 200;
    }
`

const FormContainer = styled.form `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 30%;
`
const AddTask = styled.button `
  width: 75px;
  height: 30px;
  color: #fff;
  border: 1px solid #fff;
  background: transparent;
  margin-left: 10px;
  cursor: pointer;
`

const BorrarTodo = styled.button `
  width: 120px;
  height: 30px;
  color: #fff;
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
`

export const Todo = (props) => {

  const [Input, setInput] = useState('');

  const handleOnChange = (e) => {
    setInput(e.currentTarget.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    props.addTodo(Input);
    setInput('');
  }

  return (
    <>
      <TodoContainer>
        <Title as='h2'>Guarda tus tareas por hacer</Title>
        <FormContainer onSubmit={handleOnSubmit}>
        <StyledInput variant='filled' placeholder='Escribe tu tarea' type='text' value={Input}
        onChange={handleOnChange}/>
        <AddTask type='submit'>Añadir</AddTask>
        </FormContainer>
        <BorrarTodo>Borrar todo</BorrarTodo>
      </TodoContainer>
    </>
  )
}