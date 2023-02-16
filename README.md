# projet-14hrnet-plugin-modal of React components created using `create-react-app`


## Installation 

Run the following command:
npm install simple-component-library

## Usage

import React, { useState, useEffect } from 'react'
import Modal from 'projet-14hrnet-plugin-modal'

export default function Modal(props) {
 const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }
  

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button> 

      {modal && (
        <div id="confirmation" className="modal-container">
          <div className="modal">
            <div className="modal-content">
              <p>
                <strong>Employee Created!</strong>
              </p>
              <p>The employee has been added to the database</p>

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