import {ADD_QUESTION, ANSWER_QUESTION, RECEIVE_QUESTIONS} from "../actions/questions";

export default function questions(state = {}, action) {
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return {...action.questions};
        case ADD_QUESTION:
            return {
                ...questions,
                [action.question.id]: action.question
            };
        case ANSWER_QUESTION:
            const {authedUser, qid, answer} = action.info;
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            };
        default:
            return state;
    }
}