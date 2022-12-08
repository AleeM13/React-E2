import React, { useState } from 'react'

export const Search = ({ handleSubmit }) => {
  const [pokemon, setPokemon] = useState('');

  return (
    <>
        <form onSubmit={(e) => {
          handleSubmit(e, pokemon);
          e.preventDefault();
        }} className='search'>
          <input className='inputStyled' type="text" placeholder='Ingresa un nombre'
          onSubmit= { (e) => e.preventDefault() }
          onChange={ (e) => setPokemon(e.target.value) }
          value= { pokemon }>
          </input>
          <button className='btnStyled' disabled={ !pokemon } type='submit'>Buscar</button>
        </form>
    </>
  )
}
