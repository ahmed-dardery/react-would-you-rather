import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from "./_DATA";

export function saveQuestion(info){
    return _saveQuestion(info);
}
export function saveQuestionAnswer(info){
    return _saveQuestionAnswer(info);
}
export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, quesions]) => ({
        users,
        quesions,
    }))
}