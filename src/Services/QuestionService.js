import axiosInstance from './axios';

import {
    createQuestion as createQuestionAPI,
    deleteQuestion as deleteQuestionAPI,
  } from './api';

 class QuestionService {
   
    getQuestions = () => {
        return axiosInstance.get('/').then(res => {           
            return res.data.success;
          }).catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log("error.response.data",error.response.data);
              console.log("error.response.data", error.response.status);
              console.log("error.response.headers", error.response.headers);
              return [];
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log("error.request", error.request);
              return [];
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
              return [];
            }
          });
    }

//use oath to only return the questions that were voted by user
    getQuestionsVotes = () =>{
      //http://localhost:5000/questions/votes
    // [{
  //   "id": 1,
  //   "createdBbyUserId": 2,   
  //   "optionId": 6193,
  //   "questionId": 1,
  //   "createdAt": "2023-01-06T22:17:18.780Z",
  // },
  // {
  //   "id": 2,
  //   "createdBbyUserId": 2,
  //   "optionId": 2525,
  //   "questionId": 5,
  //   "createdAt": "2023-01-06T18:53:18.780Z",
  // },]
      return axiosInstance.get('/votes').then(res => {           
        return res.data.success;
      }).catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("error.response.data",error.response.data);
          console.log("error.response.data", error.response.status);
          console.log("error.response.headers", error.response.headers);
          return [];
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log("error.request", error.request);
          return [];
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
          return [];
        }
      });

    }

    getVotesByQuestionsId = (id) => {
      //http://localhost:5000/questions/2/votes
    //   [{
    //     "id": 2,
    //     "createdBbyUserId": 2,
    //     "optionId": 2525,
    //     "questionId": 5,
    //     "createdAt": "2023-01-06T18:53:18.780Z"
    // }, {
    //     "id": 3,
    //     "createdBbyUserId": 3,
    //     "optionId": 2525,
    //     "questionId": 5,
    //     "createdAt": "2023-01-06T18:55:18.780Z"
    // }]
      return axiosInstance.get('/'+id+'/votes').then(res => {           
        return res.data.success;
      }).catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("error.response.data",error.response.data);
          console.log("error.response.data", error.response.status);
          console.log("error.response.headers", error.response.headers);
          return [];
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log("error.request", error.request);
          return [];
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
          return [];
        }
      });

    }

    createQuestion(question){
       // return axiosInstance.post(QUESTION_API_BASE_URL, question);
       return  createQuestionAPI(question);
    }

    getQuestionById(questionId){
        //return axiosInstance.get(QUESTION_API_BASE_URL + '/' + QuestionId);
    }

    updateQuestionVotes(questionId, optionId){       
        //authorization header: currentUserId, 
        //input: question id          
        return axiosInstance.put('/'+questionId+'/votes').then(res => {   
                 
          return res.data.success;
        }).catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("error.response.data",error.response.data);
            console.log("error.response.data", error.response.status);
            console.log("error.response.headers", error.response.headers);
            return [];
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log("error.request", error.request);
            return [];
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            return [];
          }
        });    
    }

    deleteQuestion(questionId){
        //return axiosInstance.delete(QUESTION_API_BASE_URL + '/' + questionId);
        return deleteQuestionAPI();
    }
}

export default new QuestionService()