import axios from 'axios';
import {
    createQuestion as createQuestionAPI,
    updateQuestion as updateQuestionAPI,
    deleteQuestion as deleteQuestionAPI,
  } from './api';

const QUESTION_API_BASE_URL = "http://localhost:5000/questions";

 class QuestionService {
   
    getQuestions = () => {
        return axios.get(QUESTION_API_BASE_URL + '/').then(res => {           
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
       // return axios.post(QUESTION_API_BASE_URL, question);
       return  createQuestionAPI(question);
    }

    getQuestionById(questionId){
        //return axios.get(QUESTION_API_BASE_URL + '/' + QuestionId);
    }

    updateQuestion(text, questionId){
        //return axios.update(QUESTION_API_BASE_URL + '/' + questionId);       
        return updateQuestionAPI(questionId);
    }

    deleteQuestion(questionId){
        //return axios.delete(QUESTION_API_BASE_URL + '/' + questionId);
        return deleteQuestionAPI();
    }
}

export default new QuestionService()