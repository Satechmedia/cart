import React from 'react'
import styles from "./Search.module.scss"
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <div className={styles.search}>
           
            <div className={styles.search__input}>
                <input 
                    type="text" 
                    placeholder=' search'
                />
                <div className={styles.search__input__search}>
                    <SearchIcon />
                </div>
            </div>

            <div className={styles.search__filter}><TuneIcon className={styles.search__tune} /></div>
        </div>
    )
}

export default Search
