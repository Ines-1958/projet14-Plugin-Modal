# projet-14hrnet-plugin-modal of React components created using `create-react-app`

## Installation 

Run the following command:
npm install projet-14hrnet-plugin-modal

## Usage

There are different props used including:
 - modal: which is the initial state set to false
 - setModal: is the function that manages the state, depending on whether it is true for opening the modal or false for     closing
 - title: is the prop used to display the title of the modal
 - message: is the prop that displays the message contained in the modal (if there is one).

So, using the modal, the code should look like the following: When the open button is clicked, the toggleModal function which manages the opening and closing of the modal is called

```javascript
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

      <Modal
        modal={modal}
        setModal={setModal}
        title={'Employee Created!'}
        message={'The employee has been added to the database.'}
      />
    </>
  )
}