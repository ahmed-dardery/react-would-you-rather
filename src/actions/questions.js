import {hideLoading, showLoading} from "react-redux-loading";
import {saveQuestion, saveQuestionAnswer} from "../utils/api";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export const ADD_QUESTION = 'ADD_QUESTION';

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

//{optionOneText, optionTwoText, author, callback}
export function handleAddQuestion(info) {
    return (dispatch) => {
        dispatch(showLoading());
        saveQuestion(info).then(question => {
            dispatch(addQuestion(question));
            dispatch(hideLoading());
            info.callback(question.id);
        }).catch(() => {
            alert("An error occurred, please retry again.");
        })
    }
}

export const ANSWER_QUESTION = 'ANSWER_QUESTION';

function answerQuestion(info) {
    return {
        type: ANSWER_QUESTION,
        info,
    }
}

//{authedUser, qid, answer}
export function handleAnswerQuestion(info) {
    return (dispatch) => {
        dispatch(showLoading());
        saveQuestionAnswer(info).then(() => {
            dispatch(answerQuestion(info));
            dispatch(hideLoading());
        })
    }
}