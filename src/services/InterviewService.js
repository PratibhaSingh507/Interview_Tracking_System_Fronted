import axios from 'axios';

const INTERVIEW_API_BASE_URL = "http://localhost:8089/schedule/getAllInterviews";

class InterviewService {

    getInterviews(){
        return axios.get(INTERVIEW_API_BASE_URL);
    }

    createInterview(interview){
        return axios.post(INTERVIEW_API_BASE_URL, interview);
    }

    getInterviewById(interviewId){
        return axios.get(INTERVIEW_API_BASE_URL + '/' + interviewId);
    }

    updateInterview(interview, interviewId){
        return axios.put(INTERVIEW_API_BASE_URL + '/' + interviewId, interview);
    }

    deleteInterview(interviewId){
        return axios.delete(INTERVIEW_API_BASE_URL + '/' + interviewId);
    }
}

export default new InterviewService()




