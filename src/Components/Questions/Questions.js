import { useState, useEffect } from "react";
import Question from "./Question";
import QuestionAndPoll from './QuestionAndPoll';



import {
    getQuestions as getQuestionsAPI,
    createQuestion as createQuestionAPI,
    updateQuestion as updateQuestionAPI,
    deleteQuestion as deleteQuestionAPI,
} from '../../api';

const Questions = ({questionURL, currentUserId}) => {
    const [backendQuestions, setBackendQuestions] = useState([]);
    const [activeQuestion, setActiveQuestion] = useState(null);
    const rootQuestions = backendQuestions.filter(
        (backendQuestion) => backendQuestion.parentId === null
    );


    const getReplies = (questionId) =>{       
        return backendQuestions
        .filter((backendQuestion) => backendQuestion.parentId === questionId)
        .sort(
            (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );}

      const addQuestion = (text) => {
        console.log('addQuestion triggered', text);
        createQuestionAPI(text).then((question) => {         
          setBackendQuestions([question.text, ...backendQuestions]);
          setActiveQuestion(null);
        });
      };
    
      const updateQuestion = (text, questionId) => {
        updateQuestionAPI(text).then(() => {
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
          deleteQuestionAPI().then(() => {
            const updatedBackendQuestions = backendQuestions.filter(
              (backendQuestion) => backendQuestion.id !== questionId
            );
            setBackendQuestions(updatedBackendQuestions);
          });
        }
      };
    
      useEffect(() => {
        getQuestionsAPI().then((data) => {
          setBackendQuestions(data);
        });
      }, []);

      return (
        <div className="container">
            <div id="question-form">
                <QuestionAndPoll 
                    addQuestion={addQuestion} />
             </div>
            <div id="all-questions">
                {rootQuestions.map((rootQuestion) => (
                    <Question 
                        key={rootQuestion.id}
                        question={rootQuestion}
                        replies={getReplies(rootQuestion.id)}                        
                        setActiveQuestion={setActiveQuestion}
                        activeQuestion={activeQuestion}
                        addQuestion={addQuestion}
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