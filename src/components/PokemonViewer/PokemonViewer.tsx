import * as React from 'react';

//import Loader from "../Loader/Loader";
import PokemonView from '../PokemonView/PokemonView';
import styles from './PokemonViewer.module.css';

const Loader = React.lazy(() => import('../Loader/Loader'));

enum Status {
  idle = 'idle',
  loading = 'loading',
  resolved = 'resolved',
  error = 'error',
}

interface PokemonProps {
  pokemonData: object | undefined,
  status: Status
}
const PokemonViewer = ({ pokemonData, status = Status.idle }: PokemonProps) => {
  return (
    <div className={styles.PokemonViewer}>
      {status === Status.idle && <div> Idle: Please search for a pokemon</div>}
      {status === Status.loading && (
        <div>
          <React.Suspense fallback={<div>Loading the loader!...</div>}>
            <Loader />
          </React.Suspense>
        </div>
      )}
      {status === Status.resolved && <PokemonView pokemon={pokemonData} />}
      {status === Status.error && <div className={styles.error}> Error: There was an error fetching the pokemon </div>}
    </div>
  );
};


export default PokemonViewer;
