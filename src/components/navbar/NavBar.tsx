import styles from './NavBar.module.css';
import LogoIcon from '../../assets/icons/logo.svg?react';
import NavHomeIcon from '../../assets/icons/icon-nav-home.svg?react';
import NavMoviesIcon from '../../assets/icons/icon-nav-movies.svg?react';
import NavTvSeriesIcon from '../../assets/icons/icon-nav-tv-series.svg?react';
import NavBookmarksIcon from '../../assets/icons/icon-nav-bookmark.svg?react';  
import avatarImage from '../../assets/image-avatar.png';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return <div className={styles.navBarContainer}>
        <LogoIcon className={styles.logo}/>
        <div className={styles.navLinkContainer}>
            <NavLink to='media' className={styles.navLink} end>
                {( { isActive }) => (
                    <NavHomeIcon className={isActive ? styles.activeLink : styles.inactiveLink } />
                )}
            </NavLink>
            <NavLink to='media/movies' className={styles.navLink}>
                {( { isActive }) => (
                    <NavMoviesIcon className={isActive ? styles.activeLink : styles.inactiveLink } />
                )}
            </NavLink>
            <NavLink to='media/series' className={styles.navLink}>
                {( { isActive }) => (
                    <NavTvSeriesIcon className={isActive ? styles.activeLink : styles.inactiveLink } />
                )}
            </NavLink>
            <NavLink to='media/bookmarks' className={styles.navLink}>
                {( { isActive }) => (
                    <NavBookmarksIcon className={isActive ? styles.activeLink : styles.inactiveLink } />
                )}
            </NavLink>
        </div>
        <img src={avatarImage} className={styles.avatarImage}></img>
    </div>
}

export default NavBar;