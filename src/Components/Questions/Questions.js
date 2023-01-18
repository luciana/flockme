import { useState, useEffect } from "react";
import Question from "./Question";
import QuestionService from '../../Services/QuestionService'

const Questions = ({currentUserId}) => {
    const [backendQuestions, setBackendQuestions] = useState([]);
    const [activeQuestion, setActiveQuestion] = useState(null);
    const [votedList, setVotedList] = useState([]);
    const [votedOptionsList, setVoteOptionsdList] = useState([]);
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

        QuestionService.getQuestionsVotes().then((data) => {
          console.log("Vote component call to getQuestionsVotes", data);        
          const newArray = [];            
          for (let i = 0; i < data.length; i++) {
            newArray.push(data[i].optionId);
          }
          setVoteOptionsdList(newArray);
          setVotedList(data);

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
    
      const handleVote =(question, optionId) =>{             
        QuestionService.updateQuestionVotes(question.id, optionId ).then( () => {
          console.log('update question record and create/update new vote item');
          //update votedList
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

      const updateVotedList = (item) => {    
        setVotedList(votedList => {           
          const newArray = [...votedList];
          newArray.push(item);
          return newArray;
        });
      }

      console.log("votedList in QuestionS", votedList);
      return ( 
            <div id="all-questions" className=" container border border-2 p-0 d-flex flex-column">
                {rootQuestions.map((rootQuestion) => (
                    <Question 
                        key={rootQuestion.id}
                        question={rootQuestion}
                        replies={getReplies(rootQuestion.id)}                        
                        setActiveQuestion={setActiveQuestion}
                        handleVote={handleVote}
                        updateVotedList={updateVotedList}
                        votedList={votedList}
                        votedOptionsList={votedOptionsList}
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