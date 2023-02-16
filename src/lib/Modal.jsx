import React, { useEffect, useRef  } from 'react'
import './Modal.scss'

export default function Modal(props) {
  const { modal, setModal } = props
  const modalRef = useRef(null)

  const toggleModal = () => {
    setModal(!modal)
  }

  
  useEffect(() => {

    /**Permet de fermer la modale avec la touche echap du clavier */
    function handleEscKey(event) {
      if (event.key === 'Escape') {
        setModal(false)
      }
    }

    /**Permet de fermer la modale en cliquant n'importe où sur la page */
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
                <strong>Employee Created!</strong>
              </p>
              <p>The employee has been added to the database.</p>

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
