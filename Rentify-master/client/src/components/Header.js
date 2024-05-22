// client/src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={styles.header}>
            <nav style={styles.nav}>
                <ul style={styles.navList}>
                    <li style={styles.navItem}>
                        <Link to="/register" style={styles.navLink}>Register</Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link to="/login" style={styles.navLink}>Login</Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link to="/properties" style={styles.navLink}>Properties</Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link to="/add-property" style={styles.navLink}>Add Property</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        background: '#282c34',
        padding: '1rem',
        color: 'white',
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
    },
    navItem: {
        margin: '0 1rem',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.2rem',
    }
};

export default Header;
