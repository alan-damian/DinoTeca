import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = ()=>{
    return(
        <nav className={styles.navbar}>
            <ul className={styles.navLinks}>
                <li><NavLink to="/DinoTeca" className={styles.navLink}>Principal</NavLink></li>
                <li><NavLink to="/DinoTeca/Descubre" className={styles.navLink}>Descubre</NavLink></li>
                <li><NavLink to="/DinoTeca/Contacto" className={styles.navLink}>Contacto</NavLink></li>
                <li><NavLink to="/DinoTeca/Info" className={styles.navLink}>Info</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;