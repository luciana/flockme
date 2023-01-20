import React, {useState, useRef} from 'react'
import { Modal } from 'react-bootstrap'
import { RiTimeLine, RiMagicLine }  from 'react-icons/ri';
import Avatar from 'react-avatar';
import Item from '../Items/Item';
import ItemForm from '../Items/ItemForm';

function QuestionModalDialog(
  {
    addPostOptionsFromQuestion,
  handlePublishQuestion,
  handleCancel,
  removeTodo,
  updateTodo,
  completeTodo,
  todos,
  addTodo,
  hasCancelButton = true}
) {

 
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [votePeriod, setVotePeriod] = useState(10);
  const [input, setInput] = useState("");
  const [expertTag, setExpertTag] = useState("");
  const inputRef = useRef(null);
  const isTextareaEmpty = input.length === 0;
  const initModal = () => {
    return setShowQuestionModal(!false)
  }  

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  console.log('todos in question modal dialog', todos);
  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleChangeExpertTage = (e) =>{
    setExpertTag(e.target.value);
  }

  const handleChangeVotePeriod = e => {       
    console.log("onchange radio button" ,e.currentTarget.value);
    setVotePeriod(e.currentTarget.value);
  }

  const addMinutes = (date, minutes)  => {
    console.log("addMinutes", date, minutes);
    date.setMinutes(date.getMinutes() + minutes);
  
    return date;
  }

  const onSubmit = e => {
    addPostOptionsFromQuestion({
      id: Math.floor(Math.random() * 10000),
      text: input,
      parentId: null,
      userId: 2,
      username: "Luciana",
      name: "Luciana Bruscino",
      createdAt: new Date().toISOString(),
      voteEndAt: addMinutes(new Date(), parseFloat(votePeriod)),
      sentiment: "Positive",
      options:null,
      tag: expertTag
    });

    setShowOptionsModal(true);

  }

  return (
    <>
      <div className="p-2 row align-items-start"> 
            <div className="col-2 px-1 d-grid  "> <Avatar size="42" name="Luciana Bruscino" className=" img-profile rounded-circle mx-auto mb-0" alt="{Luciana Bruscino}" /></div>
            <div className="col-10 d-grid  py-3">
                <div className="text-small lh-1"><span>Luciana </span><span aria-hidden="true"> · </span> <span> 1/6/2023 at 1:53 pm </span></div>                                                                   
            </div>  
            <button type="button" className="btn my-2 btn-outline-secondary rounded-pill btn-ouline-secondary-no-hover" onClick={initModal}> 
                      Enter your question 
            </button>    
      </div>

      <div>
        <form  className=''>
        <Modal  fullscreen={true} show={showQuestionModal} >
              <Modal.Header closeButton onClick={() => {setShowQuestionModal(false)}}>
                <Modal.Title>What is your question</Modal.Title>
              </Modal.Header>
              <Modal.Body >               
                  <textarea
                    placeholder={"What should I make for my kids birthday? #flocks pizza, pasta, salad"}
                    value={input}
                    onChange={handleChange}
                    name='textarea'
                    rows="4"
                    maxLength="124"
                    className='form-control'
                    ref={inputRef}
                  />         
                  <div>
                  <div className="row g-3 align-items-center">
                      <div className="col-auto">
                        <label htmlFor="expertTag" className="col-form-label"><RiTimeLine size={24}/></label>
                      </div>
                      <div className="col-auto">
                     

                        <div className="form-check form-check-inline">
                            <input type="radio" onChange={handleChangeVotePeriod} disabled={false} className="form-check-input" id="10" name="votePeriod" value="10" defaultChecked={votePeriod === 10} /><label className="form-check-label text-small "  htmlFor="10">10 min</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" onChange={handleChangeVotePeriod} disabled={false} className="form-check-input" id="120" name="votePeriod" value="120" defaultChecked={votePeriod === 120}/><label className="form-check-label text-small " htmlFor="120">2 hours</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input type="radio" onChange={handleChangeVotePeriod}  disabled={false} className="form-check-input" id="480" name="votePeriod" value="480" defaultChecked={votePeriod === 480} /><label className="form-check-label text-small " htmlFor="480">8 hours</label>
                        </div>
                      </div>             
                    </div>           
                  </div>
                           
                    <div className="row g-3 align-items-center">
                      <div className="col-auto">
                        <label htmlFor="expertTag" className="col-form-label text-small " data-bs-toggle="tooltip" data-bs-placement="top" title=" an expert opinion will weigh more">Expert Tag</label>
                      </div>
                      <div className="col-auto">
                        <input type="text" 
                              id="expertTag" 
                              name="expertTag" 
                              className="form-control lh-1" 
                              placeholder="i.e #designer"
                              list="expertDatalistTagOptions"                             
                              value={expertTag}
                              onChange={handleChangeExpertTage} />
                                <datalist id="expertDatalistTagOptions">
                                  <option value="#nutricionist" />
                                  <option value="#designer" />
                                  <option value="#technologist" />
                                  <option value="#cook" />
                                  <option value="#mechanic" />
                                  <option value="#teacher" />
                                  <option value="#parents" />
                                  <option value="#lawyer" />
                                  <option value="#life_coach" />
                                  <options value="#finance" />
                                </datalist>

                      </div>         
                    </div>

                    <div className="mt-5 alert alert-warning alert-dismissible fade show text-small" role="alert">
                    <div className="alert-heading" ><RiMagicLine size={24} /><strong>Pro Tip!</strong></div>
                      <div>Use #flocks to list out the options for your question. Using #flocks will auto populate the list of options for you! </div>
                     <div className="fst-italic"> i.e Most fun vacation spot with kids. #flocks beach, mountains. </div>                  
                    </div>
                                                       
              </Modal.Body>
              <Modal.Footer>                                           
                  {hasCancelButton && (
                    <button
                      type="button"
                      className="btn btn-md btn-dark"
                      onClick={()=> {setShowQuestionModal(false)}}
                    >
                      Discard
                    </button>                    
                  )}         
                  <button onClick={onSubmit} disabled={isTextareaEmpty} className='btn-md btn btn-primary my-3'>
                    Next
                </button>      
              </Modal.Footer>
        </Modal>
        </form>   

        <Modal  fullscreen={true} show={showOptionsModal} >
              <Modal.Header closeButton onClick={() => {setShowOptionsModal(false)}}>
                <Modal.Title>Enter the options</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Item
                    todos={todos}           
                    removeTodo={removeTodo}
                    completeTodo={completeTodo}
                    updateTodo={updateTodo}
                  />
                  <ItemForm onSubmit={addTodo} />
              </Modal.Body>
              <Modal.Footer>                           
                <button onClick={handlePublishQuestion} className='btn btn-primary btn-lg my-3'>
                  Publish Question & Poll
                 </button>
              </Modal.Footer>
        </Modal>
         </div>
       
    </>
  )
}
export default QuestionModalDialog