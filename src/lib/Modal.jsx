import React, { useEffect, useRef  } from 'react'
import './Modal.scss'

export default function Modal(props) {
  const { modal, setModal, title, message } = props
  const modalRef = useRef(null)

  const toggleModal = () => {
    setModal(!modal)
  }

  
  useEffect(() => {

    /**Allows you to close the modal with the escape key on the keyboard */
    function handleEscKey(event) {
      if (event.key === 'Escape') {
        setModal(false)
      }
    }

    /**Allows you to close the modal by clicking anywhere on the page */
    function handleClickOutside(event) {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          setModal(false)
        }
    }

    window.addEventListener('keydown', handleEscKey)
    window.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('keydown', handleEscKey)
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      {modal && (
        <div id="confirmation" className="modal-container" >
          <div  className="modal" ref={modalRef}>
            <div className="modal-content" >
              <p>
                <strong>{title}</strong>
              </p>
              <p>{message}</p>

              <button onClick={toggleModal} className="close-modal btn-primary">
                <span className="btn-close">Close</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  )
}
