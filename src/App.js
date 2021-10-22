import React, { Component } from 'react';
import logo from './logo.svg';
import { CardList } from './components/CardList.component';
import { SearchBox } from './components/SearchBox.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemons: [],
      search: ''
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
      .then(response => response.json())
      .then(name => this.setState({ pokemons: name.results }));
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };
  render() {
    const { pokemons, search } = this.state;
    const fileteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Pokemon Database</h1>
        </header>
        <div className="pokemon-database">
          <SearchBox
            placeholder='Search Pokemon'
            handleChange={this.handleChange}
          />
          <CardList pokemons={fileteredPokemons}></CardList>
        </div>
      </div>
    );
  }
}

export default App;
