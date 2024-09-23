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
            <div className={styles.card}>
                <img src={EonProterozoico} className="card-img" alt="Proterozoico" width="350px"></img>
            </div>
            <div className={styles.card}>
                <img src={EonPaleozoico} className="card-img" alt="Paleozoico" width="350px"></img>
            </div>
            <div className={styles.card}>
                <img src={EonMesozoico} className="card-img" alt="Mesozoico" width="350px"></img>
            </div>
            <div className={styles.card}>
                <img src={EonCenozoico} className="card-img" alt="Cenozoico" width="350px"></img>
            </div>
            </div>
        
        </section>
        )
}

export default Principal;