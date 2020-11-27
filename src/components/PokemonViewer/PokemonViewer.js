//import Loader from "../Loader/Loader";
import PokemonView from '../PokemonView/PokemonView';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './PokemonViewer.module.css';

const Loader = React.lazy(() => import('../Loader/Loader'));

const PokemonViewer = ({ pokemonData, status = 'idle' }) => {
    return (
        <div className={styles.PokemonViewer}>
            {status === 'idle' && <div> Idle: Please search for a pokemon</div>}
            {status === 'loading' && (
                <div>
                    <React.Suspense fallback={<div>Loading the loader!...</div>}>
                        <Loader />
                    </React.Suspense>
                </div>
            )}
            {status === 'resolved' && <PokemonView pokemon={pokemonData} />}
            {status === 'error' && <div className={styles.error}> Error: There was an error fetching the pokemon </div>}
        </div>
    );
};

PokemonViewer.propTypes = {};

export default PokemonViewer;
