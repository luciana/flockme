import axiosInstance from './axios';

import {
    createQuestion as createQuestionAPI,
    updateQuestion as updateQuestionAPI,
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

    createQuestion(question){
       // return axiosInstance.post(QUESTION_API_BASE_URL, question);
       return  createQuestionAPI(question);
    }

    getQuestionById(questionId){
        //return axiosInstance.get(QUESTION_API_BASE_URL + '/' + QuestionId);
    }

    updateQuestion(text, questionId){
        //return axiosInstance.update(QUESTION_API_BASE_URL + '/' + questionId);       
        return updateQuestionAPI(questionId);
    }

    deleteQuestion(questionId){
        //return axiosInstance.delete(QUESTION_API_BASE_URL + '/' + questionId);
        return deleteQuestionAPI();
    }
}

export default new QuestionService()