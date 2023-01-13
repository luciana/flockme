import React, {useState} from 'react'
import { Modal } from 'react-bootstrap'
import { RiMessage3Line, RiFacebookCircleFill, RiTwitterFill }  from 'react-icons/ri';


function ReplyModalDialog(replies) {

  const [isShow, invokeModal] = useState(false);

  const initModal = () => {
    return invokeModal(!false)
  }  
  return (
    <>
      <button type="button" className="btn btn-outline-secondary rounded-pill" onClick={initModal}> <RiMessage3Line />  What happened afterwards? </button>        
        {(replies.text).map((reply) => (          
          <div key={reply.id} >
              <Modal show={isShow} >
              <Modal.Header closeButton onClick={() => {invokeModal(false)}}>
                <Modal.Title>This is what happened...</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  {reply.text}
              </Modal.Body>
              <Modal.Footer>                
                <button type="button" className="btn btn-light" onClick={() => {invokeModal(false)}}> 
                  <RiFacebookCircleFill size="36" />
                </button>     
                <button type="button" className="btn btn-light" onClick={() => {invokeModal(false)}}> 
                  <RiTwitterFill size="36" />
                </button>
              </Modal.Footer>
            </Modal>
            </div>
          ))}
    </>
  )
}
export default ReplyModalDialog