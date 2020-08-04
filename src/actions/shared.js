import {hideLoading, showLoading} from "react-redux-loading";
import {getInitialData} from "../utils/api";
import {receiveUsers} from "./users";
import {receiveQuestions} from "./questions";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        getInitialData().then(({users, questions})=>{
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading());
        }).catch(()=>{
            alert("An error occurred, please refresh the page");
        })
    }
}