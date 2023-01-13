import React, {useState} from 'react'
import { Modal } from 'react-bootstrap'
import { RiMessage3Line }  from 'react-icons/ri';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from "react-share";

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
                <FacebookShareButton
                    url={"http://www.flockapp.com"}
                    quote={"Flock App just helped with a simple decision in my life.."}
                    hashtag="#flockapp"
                    className="btn btn-light"
                  >
                    <FacebookIcon size={36} />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={"http://www.flockapp.com"}
                    title={"flockapp - World is yours to explore"}
                    hashtag="#camperstribe"
                    className="btn btn-light"
                  >
                    <TwitterIcon size={36} />
                  </TwitterShareButton>
              </Modal.Footer>
            </Modal>
            </div>
          ))}
    </>
  )
}
export default ReplyModalDialog