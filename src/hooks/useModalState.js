import { useState } from 'react'

function useModalState() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)

  const closeModal = () => setIsModalOpen(false)

  return {
    isModalOpen,
    openModal,
    closeModal
  }
}

export default useModalState
