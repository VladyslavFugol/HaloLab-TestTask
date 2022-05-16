import { ReactComponent as Exit } from 'assets/exit-icon.svg'
import OrderForm from '../order-form/OrderForm'
import styles from './Modal.module.scss'

function Modal({ isModalOpen, closeModal, modalCardInfo }) {
  const { name, category, price } = modalCardInfo

  return (
    <>
      {isModalOpen &&
        <div className={styles.container}>
          <div className={styles.modal}>
            <div className={styles.exit} onClick={() => closeModal()}>
              <Exit/>
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.category}>{category}</div>
              <div className={styles.title}>{name}</div>
              <div className={styles.price}>
                <div className={styles.priceIcon}>$</div>
                <div className={styles.priceNumbers}>{price}</div>
              </div>
            </div>
            <OrderForm closeModal={closeModal}/>
          </div>
        </div>}
    </>
  )
}

export default Modal
