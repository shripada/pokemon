import './App.css';

import React, {useEffect, useState} from 'react';

import ErrorBoundary from './ErrorBoundary'
import PokemonViewer from './components/PokemonViewer'
import SearchField from './components/SearchField/SearchField'
import {fetchAPokemon} from './api/api';

function App() {

  console.log("If we are in dev mode we should see this-: ", process.env.REACT_APP_NOT_SECRET_CODE, process.env.REACT_APP_NOT_SECRET_CODE1);
   
  const [searchTerm, setSearchTerm] = useState("")
  const [pokemon, setPokemon] = useState(undefined)
  const [status, setStatus] = useState("idle");
  
  useEffect(() => {
    
    if(searchTerm === ""){
      setStatus('idle')
      return;
    }
    
    setStatus('loading');
    fetchAPokemon(searchTerm).then((pokemon)=>{
      setPokemon(pokemon)
      setStatus('resolved')
    }).catch((error)=>{
      //process the error
      setStatus('error')
    })

  }, [searchTerm])

  return (
    <div className="App">
        
          <SearchField onSearchClicked={(search) => setSearchTerm(search) }/>
          <ErrorBoundary>
          <PokemonViewer pokemonData={pokemon} status={status}/>
        </ErrorBoundary>
    </div>
  );
}

export default App;
