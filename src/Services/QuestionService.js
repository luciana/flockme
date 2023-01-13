//import axios from 'axios';

import {
    getQuestions as getQuestionsAPI,
    createQuestion as createQuestionAPI,
    updateQuestion as updateQuestionAPI,
    deleteQuestion as deleteQuestionAPI,
  } from './api';

//const QUESTION_API_BASE_URL = "http://localhost:8080/api/v1/questions";

 class QuestionService {

    getQuestions = () => {
        //return axios.get();    
        return getQuestionsAPI();
    }

    createQuestion(question){
       // return axios.post(QUESTION_API_BASE_URL, question);
       return  createQuestionAPI(question);
    }

    getQuestionById(questionId){
        //return axios.get(Question_API_BASE_URL + '/' + QuestionId);
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