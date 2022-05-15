import { useState, useEffect } from 'react'
import { getCards } from 'services/api/cards-api'
import { Card, Modal, Loader } from 'components'
import useModalState from 'hooks/useModalState'
import styles from './Cards.module.scss'

function Cards() {
  const [cards, setCards] = useState([])
  const [isCardsLoading, setCardsLoading] = useState(false)
  const [getCardsError, setCardsError] = useState(null)
  const [modalCardInfo, setModalCardInfo] = useState({})

  const { isModalOpen, openModal, closeModal } = useModalState()

  useEffect(() => {
    setCardsLoading(true)

    getCards()
      .then(setCards)
      .catch(setCardsError)
      .finally(() => setCardsLoading(false))
  }, [])

  const renderCards = () => {
    if (getCardsError) {
      return <h2>Error...</h2>
    }

    if (!cards || isCardsLoading) {
      return <Loader/>
    }

    return <>
      {cards.map(card =>
        <Card
          key={card.name}
          card={card}
          openModal={openModal}
          setModalCardInfo={setModalCardInfo}
        />
      )}
    </>
  }

  const getCheapestCard = () => {
    const sortedCards = Object
      .assign([], cards)
      .sort((a, b) => a.price - b.price)

    setModalCardInfo(sortedCards[0])
    openModal()
  }

  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        {renderCards()}
      </div>
      <button
        style={{display: isCardsLoading ? 'none' : 'block'}}
        className={styles.button}
        onClick={() => getCheapestCard()}
      >
        Buy a cheapest
      </button>
      <Modal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        modalCardInfo={modalCardInfo}
      />
    </div>
  )
}

export default Cards
