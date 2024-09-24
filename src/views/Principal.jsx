import styles from './Principal.module.css'


const Principal = ()=>{
    return(
        <section className={styles}>
        
            <h1 className={styles.titulo}>Eones de la tierra</h1>

            <div className={styles.eras}>
                <article className={styles.prote}><h2 className={styles.NombreEra}>PROTEROZOICO</h2></article>
                <article className={styles.paleo}><h2 className={styles.NombreEra}>PALEOZOICO</h2></article>
                <article className={styles.meso}><h2 className={styles.NombreEra}>MESOZOICO</h2></article>
                <article className={styles.ceno}><h2 className={styles.NombreEra}>CENOZOICO</h2></article>
            </div>
        
        </section>
        )
}

export default Principal;