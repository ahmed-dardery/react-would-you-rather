import React, {Component, Fragment} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {findPick} from "../utils/helper";
import Block from "./Block";

const ProgressBar = ({option, total}) => {
    const votes = option.votes.length;
    const p = votes * 100 / total;
    const percent = `${p}%`;

    if (p >= 10)
        return (
            <div>
                {option.text}
                <div className="progress-border">
                    <div style={{width: percent}} className="progress-fill">{percent}</div>
                </div>
                <div className="progress-text">{`${votes} out of ${total} votes`}</div>
            </div>
        );
    else
        return (
            <div>
                {option.text}
                <div className="progress-border">
                    <div style={{width: '100%', position: 'absolute'}}>{percent}</div>
                    <div style={{width: percent}} className="progress-fill"/>
                </div>
                <div className="progress-text">{`${votes} out of ${total} votes`}</div>
            </div>
        );
};

class Question extends Component {
    state = {
        selected: null
    };
    onChange = (e) => {
        this.setState({selected: e.target.value});
    };

    render() {
        const {question, author, choice, authedUser} = this.props;
        const {selected} = this.state;
        if (!authedUser) return <Redirect to='/'/>;

        if (!question) return <Redirect to='/404'/>;

        const questionAnswer = () => (<Fragment>
            <h3>Would you rather</h3>
            <form>
                <div>
                    <input checked={selected === "One"}
                           onChange={this.onChange}
                           className="block-option-radio" type="radio"
                           value="One" id="op1"/>
                    <label className="block-option-label"
                           htmlFor="op1">{question.optionOne.text}</label>
                </div>
                <p className='block-content-center'>Or</p>
                <div>
                    <input checked={selected === "Two"}
                           onChange={this.onChange}
                           className="block-option-radio" type="radio"
                           value="Two"
                           id="op2"/>
                    <label className="block-option-label"
                           htmlFor="op2">{question.optionOne.text}</label>
                </div>
                <button disabled={!selected} className='block-content-button'>Vote</button>
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