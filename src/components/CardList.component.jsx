import React from 'react';
import './CardList.css';

import { Card } from './Card.component';

export const CardList = (props) => (
  <div className='card-list'>
    {props.pokemons.map((pokemon) => (
      <Card key={pokemon.name} pokemon={pokemon}></Card>
    ))}
  </div>
);
