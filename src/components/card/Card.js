import styles from './Card.module.scss'

function Card({ card, openModal, setModalCardInfo }) {
  const { name, category, price } = card

  const handleButtonClick = (card) => {
    openModal()
    setModalCardInfo(card)
  }

  return (
    <div className={styles.container}>
      <div className={styles.category}>{category}</div>
      <div className={styles.title}>{name}</div>
      <div className={styles.cardFooter}>
        <div className={styles.price}>
          <div className={styles.priceIcon}>$</div>
          <div className={styles.priceNumbers}>{price}</div>
        </div>
        <button
          className={styles.button}
          onClick={() => handleButtonClick(card)}
        >
          Buy
        </button>
      </div>
    </div>
  )
}

export default Card
