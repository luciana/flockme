import { useState, useEffect } from "react";
import Question from "./Question";
import QuestionService from '../../Services/QuestionService'

const Questions = ({questionURL, currentUserId}) => {
    const [backendQuestions, setBackendQuestions] = useState([]);
    const [activeQuestion, setActiveQuestion] = useState(null);
    const rootQuestions = backendQuestions.filter(
        (backendQuestion) => backendQuestion.parentId === null
    );

    useEffect(() => {
        QuestionService.getQuestions().then((data) => {
          setBackendQuestions(data);
        });
      }, []);

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
        updateQuestion(question);
      }

      return (
        <div className="container">
          
            <div id="all-questions">
                {rootQuestions.map((rootQuestion) => (
                    <Question 
                        key={rootQuestion.id}
                        question={rootQuestion}
                        replies={getReplies(rootQuestion.id)}                        
                        setActiveQuestion={setActiveQuestion}
                        handleVote={handleVote}
                        activeQuestion={activeQuestion}                       
                        deleteQuestion={deleteQuestion}
                        updateQuestion={updateQuestion}                        
                        currentUserId={currentUserId}
                    />
                ))}
            </div>
        </div>
      );
};

export default Questions;