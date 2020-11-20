import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { on } from 'process';
import styles from './SearchField.module.css';

const SearchField = ({ placeholder = 'Enter pokemon name', onSearchClicked = (search) => {} }) => {
    const [text, setText] = useState('');
    return (
        <div className={styles.SearchField}>
            <input
                className={styles.SearchInput}
                type="search"
                value={text}
                placeholder={placeholder}
                onChange={(e) => {
                    setText(e.target.value);
                    if (e.target.value === '') {
                        onSearchClicked('');
                    }
                }}
            />
            <button disabled={text === ''} className={styles.SearchButton} onClick={() => onSearchClicked(text)}>
                Search
            </button>
        </div>
    );
};

SearchField.propTypes = {};

export default SearchField;
