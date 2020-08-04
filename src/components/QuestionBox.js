import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import Block from "./Block";

class QuestionBox extends Component {
    render() {
        const {question, author, answered} = this.props;
        const fullText = `${question.optionOne.text} or ${question.optionTwo.text}`;
        const displayText = fullText.length > 20 ? `${fullText.substr(0, 27)}...` : fullText;
        const buttonText = answered ? 'Go to poll' : 'View';
        return (
            <Block title={`${author.name} asks`} imageInfo={{url: author.avatarURL, alt: author.name}} innerContent={
                <Fragment>
                    <h3>Would you rather</h3>
                    <p>{displayText}</p>
                    <Link to={`/q/${question.id}`}>
                        <button className='block-content-button'>{buttonText}</button>
                    </Link>
                </Fragment>
            }/>
        )
    }
}

export default QuestionBox;