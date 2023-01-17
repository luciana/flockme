import { useState, useEffect } from "react";
import Question from "./Question";
import QuestionService from '../../Services/QuestionService'
import VoteService from '../../Services/VoteService'

const Questions = ({currentUserId}) => {
    const [backendQuestions, setBackendQuestions] = useState([]);
    const [activeQuestion, setActiveQuestion] = useState(null);

    const rootQuestions = backendQuestions.filter(
        (backendQuestion) => backendQuestion.parentId === null
    ).sort(
      (a, b) =>
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    )

    useEffect(() => {
        QuestionService.getQuestions().then((data) => {
          setBackendQuestions(data);
        });
      }, []);

      const addQuestion = (text) => {
        console.log('addQuestion triggered from question and poll', text);
        QuestionService.createQuestion(text).then((question) => {         
          setBackendQuestions([question.text, ...backendQuestions]);
          setActiveQuestion(null);
        });
    };

    const getReplies = (questionId) =>{       
        return backendQuestions
        .filter((backendQuestion) => backendQuestion.parentId === questionId)
        .sort(
            (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );}
    
      const updateQuestion = (text, questionId) => {
        console.log("updateQuestion triggered", QuestionService.updateQuestion(text, questionId));
        QuestionService.updateQuestion(text, questionId).then((data) => {
            const updatedBackendQuestions = backendQuestions.map((backendQuestion) => {
            if (backendQuestion.id === questionId) {
              return { ...backendQuestion, body: text };
            }
            return backendQuestion;
          });
          setBackendQuestions(updatedBackendQuestions);
          setActiveQuestion(null);
        });
      };
      const deleteQuestion = (questionId) => {
        if (window.confirm("Are you sure you want to remove question?")) {
            QuestionService.deleteQuestion.then(() => {
            const updatedBackendQuestions = backendQuestions.filter(
              (backendQuestion) => backendQuestion.id !== questionId
            );
            setBackendQuestions(updatedBackendQuestions);
          });
        }
      };
    
      const handleVote =(question, id) =>{             
        VoteService.createVote(currentUserId, question, id ).then( () => {
            // console.log('update question record and create vote item');
            const updatedBackendQuestions = backendQuestions.map((backendQuestion) => {
                if (backendQuestion.id === question.id) {
                  return { ...backendQuestion, body: question };
                }
                return backendQuestion;
              });
            setBackendQuestions(updatedBackendQuestions);
            setActiveQuestion(null);
          });
      }

      return ( 
            <div id="all-questions" className=" container border border-2 p-0 d-flex flex-column">
                {rootQuestions.map((rootQuestion) => (
                    <Question 
                        key={rootQuestion.id}
                        question={rootQuestion}
                        replies={getReplies(rootQuestion.id)}                        
                        setActiveQuestion={setActiveQuestion}
                        handleVote={handleVote}
                        addQuestion={addQuestion}
                        activeQuestion={activeQuestion}                       
                        deleteQuestion={deleteQuestion}
                        updateQuestion={updateQuestion}                        
                        currentUserId={currentUserId}
                    />
                ))}
            </div>
   
      );
};

export default Questions;