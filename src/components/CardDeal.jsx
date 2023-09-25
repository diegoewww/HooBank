import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Encuentra la mejor oferta de tarjeta <br className="sm:block hidden" /> en pocos pasos sencillos
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Descubre las ofertas de tarjetas más destacadas con tan solo unos clics. Optimiza tus opciones financieras de manera rápida y sencilla. </p>
      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt={card}
        className='w-[100%] h-[100%]' />

    </div>

  </section>
)

export default CardDeal
