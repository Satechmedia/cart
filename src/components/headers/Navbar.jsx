import React from 'react'
import styles from "./Navbar.module.scss"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <a href='#'><div className={styles.navbar__logo}><AutoStoriesIcon /></div></a>
            <a href='#'><div className={styles.navbar__home}>READAR</div></a>
            <div className={styles.navbar__cart}><ShoppingCartIcon /></div>
            <div className={styles.navbar__account}><AccountCircleIcon /> </div>
        </div>
    )
}

export default Navbar
