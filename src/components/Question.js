import React, {Component, Fragment} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {findPick} from "../utils/helper";
import Block from "./Block";
import {handleAnswerQuestion} from "../actions/questions";

const ProgressBar = ({option, total}) => {
    const votes = option.votes.length;
    const p = (votes * 100 / total).toFixed(1);
    const percent = `${p}%`;

    return (
        <div>
            {option.text}
            <div className="progress-border">
                {!(p >= 10) && <div style={{width: '100%', position: 'absolute'}}>{percent}</div>}
                <div style={{width: percent}} className="progress-fill">{(p >= 10) && percent}</div>
            </div>
            <div className="progress-text">{`${votes} out of ${total} votes`}</div>
        </div>
    );
};

const QuestionOption = ({selected, option, text, callback}) => (
    <div>
        <input checked={selected === option}
               onChange={callback}
               className="block-option-radio" type="radio"
               value={option} id={option}/>
        <label className="block-option-label"
               htmlFor={option}>{text}</label>
    </div>
);

class Question extends Component {
    state = {
        selected: null
    };
    onChange = (e) => {
        this.setState({selected: e.target.value});
    };
    onClick = (e) => {
        e.preventDefault();
        if (this.state.selected === null) return;

        const {authedUser} = this.props;
        const qid = this.props.question.id;
        const answer = this.state.selected ? 'optionOne' : 'optionTwo';
        this.props.dispatch(handleAnswerQuestion({authedUser, qid, answer}))
    };

    render() {
        const {question, author, choice, authedUser} = this.props;
        const {selected} = this.state;
        if (!authedUser) return <Redirect to='/'/>;

        if (!question) return <Redirect to='/404'/>;

        const questionAnswer = () => (<Fragment>
            <h3>Would you rather</h3>
            <form>
                <QuestionOption selected={selected} option='One' text={question.optionOne.text}
                                callback={this.onChange}/>
                <p className='block-content-center'>Or</p>
                <QuestionOption selected={selected} option='Two' text={question.optionTwo.text}
                                callback={this.onChange}/>
                <button onClick={this.onClick} disabled={!selected} className='block-content-button'>Vote</button>
            </form>
        </Fragment>);

        const total = question.optionOne.votes.length + question.optionTwo.votes.length;

        const questionPoll = () => (
            <Fragment>
                <h3>Would you rather</h3>
                <ProgressBar option={question.optionOne} total={total}/>
                <p className='block-content-center'>Or</p>
                <ProgressBar option={question.optionTwo} total={total}/>
            </Fragment>
        );

        return (
            <div className='window'>
                <Block title={`${author.name} asks`}
                       imageInfo={{url: author.avatarURL, alt: author.name}}
                       innerContent={choice ? questionPoll() : questionAnswer()}/>
            </div>
        );
    }
}

function mapStateToProps({questions, users, authedUser}, {match}) {
    if (authedUser === null) return {authedUser: null};
    const {id} = match.params;
    const question = questions[id];
    if (!question) return {authedUser, question: null};

    const author = users[question.author];
    const choice = findPick(question, authedUser);
    return {
        question,
        author,
        choice,
        authedUser
    };
}

export default connect(mapStateToProps)(Question);