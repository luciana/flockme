//import axios from 'axios';
import {
    getVotes as getVotesAPI,
    createVote as createVoteAPI  
  } from './api';

//const VOTE_API_BASE_URL = "http://localhost:8080/api/v1/votes";

 class VoteService {

    getVotes = () => {
        //return axios.get();    
        return getVotesAPI();
    }

    createVote(currentUserId, question, id){
       // return axios.post(VOTE_API_BASE_URL, question);
       return  createVoteAPI(currentUserId, question.id, id);
    }

}
export default new VoteService()