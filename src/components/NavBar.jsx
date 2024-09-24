import styles from './NavBar.module.css';

const NavBar = ()=>{
    return(
        <nav className={styles.navbar}>
            <ul className={styles.navLinks}>
                <li><a href="#" className={styles.navLink}>Principal</a></li>
                <li><a href="#" className={styles.navLink}>Descubre</a></li>
                <li><a href="#" className={styles.navLink}>Contacto</a></li>
                <li><a href="#" className={styles.navLink}>Info</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;