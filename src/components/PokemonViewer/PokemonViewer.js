import PropTypes from 'prop-types';
import React from 'react';
import styles from './PokemonViewer.module.css';

const PokemonViewer = ({ pokemonData, status = 'idle' }) => {
    return (
        <div className={styles.PokemonViewer}>
            {status === 'idle' && <div> Idle: Please search for a pokemon</div>}
            {status === 'loading' && <div> Loading: Fetching a pokemon </div>}
            {status === 'resolved' && <div> Resolved: Got a pokemon </div>}
            {status === 'error' && <div className={styles.error}> Error: There was an error fetching the pokemon </div>}
        </div>
    );
};

PokemonViewer.propTypes = {};

export default PokemonViewer;
