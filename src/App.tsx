import './App.css';

import React, {Suspense, useEffect, useRef, useState} from 'react';

import ErrorBoundary from './ErrorBoundary'
import PokemonViewer from './components/PokemonViewer'
import SearchField from './components/SearchField/SearchField'
import {fetchAPokemon} from './api/api';

//let PokemonViewer:React.ReactNode = null; 

//const PokemonViewer = React.lazy(() => import('./components/PokemonViewer'));

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
  
  // const mounted = useRef(false);
  // useEffect(() => {
  //    if(mounted && mounted.current === false && searchTerm !== ''){
  //       PokemonViewer = React.lazy(() => import('./components/PokemonViewer'));
  //       mounted.current = false; 
  //    }     
  // }, [searchTerm])

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
