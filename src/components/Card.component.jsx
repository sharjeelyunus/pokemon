import React from 'react';
import './Card.css';

export const Card = (props) => (
  <div className='card-continer'>
    <a
      href={`https://www.pokemon.com/us/pokedex/${props.pokemon.name}`}
      target='_blank'
      rel='noreferrer'
    >
      <img
        alt='pokemon'
        src={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`}
      />
      <h2>
        {props.pokemon.name[0].toUpperCase() + props.pokemon.name.slice(1)}
      </h2>
    </a>
  </div>
);
