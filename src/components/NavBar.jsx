import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = ()=>{
    return(
        <nav className={styles.navbar}>
            <ul className={styles.navLinks}>
                <li><NavLink to="/Principal" className={styles.navLink}>Principal</NavLink></li>
                <li><NavLink to="/Descubre" className={styles.navLink}>Descubre</NavLink></li>
                <li><NavLink to="/Contacto" className={styles.navLink}>Contacto</NavLink></li>
                <li><NavLink to="/Info" className={styles.navLink}>Info</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;