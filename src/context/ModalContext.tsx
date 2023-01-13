import React, { createContext, useState, useEffect, useRef } from "react";
interface iModalContext {
  modal: boolean,
  openModal: () => void,
  closeModal: (e) => void
}
export const ModalContext =  createContext<iModalContext>({
  modal: false,
  openModal: () => {},
  closeModal: () => {}
})
export const ModalState = ({children}: {children: React.ReactNode}) => {
  const [modal, setModal] = useState(true)
  const openModal = () => {
      setModal(true)
  }
  const closeModal = (e: any) => {
      setModal(false)
  }

  return (
      <ModalContext.Provider value={{modal, openModal, closeModal}}>
          {children}
      </ModalContext.Provider>
  )
}
