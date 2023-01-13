import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'
import { RiMessage3Line }  from 'react-icons/ri';


function ReplyModalDialog(question) {

  const [isShow, invokeModal] = useState(false);

  const initModal = () => {
    return invokeModal(!false)
  }

  return (
    <>
      <button type="button" className="btn btn-outline-secondary rounded-pill" onClick={initModal}> <RiMessage3Line /> View what {question.text.username} did... </button>     
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={() => {invokeModal(false)}}>
          <Modal.Title>This is what happened...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {question.text.text}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => {invokeModal(false)}} >
            Close
          </Button>        
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ReplyModalDialog