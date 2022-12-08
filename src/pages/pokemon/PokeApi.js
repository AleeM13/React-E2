import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Loader } from '../../components/Loader';
import { Navbar } from '../../components/Navbar';
import { PokemonCard } from '../../components/PokemonCard';
import { Search } from '../../components/Search';

export const PokeApi = () => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const Tittle = styled.h1 `
    font-size: 25px;
    margin-bottom: 20px;
  `
  const handleSubmit = async (e, pokemon) => {
    e.preventDefault();

    setData(null);
    setError(false);
    setIsLoading(true);

    try {
      const selectedPokemon = pokemon.toLowerCase().trim();
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
      )
      setData(data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  }

  return (
    <>
      <Navbar />
      <section className='sectionStyled'>
        <Tittle>Busca tu Pokemon...</Tittle>
        <Search handleSubmit={ handleSubmit } />
        { isLoading && <Loader />}
        { error && <h2 style= { {color: 'red'} }> {error} </h2> }
        {data && <PokemonCard {...data} />} 
      </section>
    </>
  );
};
