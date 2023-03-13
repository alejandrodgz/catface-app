import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalCat(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontFamily:'Cherrils', fontSize:"2rem"}}>Welcome to the Cat-Face</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.text}
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: "#b784b3", borderColor: "#b784b3"}} onClick={handleClose}>
            got it!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ModalCat;