import styles from './Principal.module.css'
import EonProterozoico from '../assets/backgrounds/Eón-Proterozoico.jpg'
import EonPaleozoico from '../assets/backgrounds/Eón-Paleozoico.jpg'
import EonMesozoico from '../assets/backgrounds/Eón-Mesozoico.jpg'
import EonCenozoico from '../assets/backgrounds/Eón-Cenozoico.jpg'


const Principal = ()=>{
    return(
        <section className={styles}>
        
            <h1>Eones de la tierra</h1>

            <div className={styles.eras}>
                <article className={styles.proto}></article>
                <article className={styles.paleo}></article>
                <article className={styles.meso}></article>
                <article className={styles.ceno}></article>
            </div>
        
        </section>
        )
}

export default Principal;