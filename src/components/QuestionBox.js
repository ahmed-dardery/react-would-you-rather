import React, {Component} from 'react';
import {Link} from "react-router-dom";

class QuestionBox extends Component {
    render() {
        const {question, author, answered} = this.props;
        const fullText = `${question.optionOne.text} or ${question.optionTwo.text}`;
        const displayText = fullText.length > 20 ? `${fullText.substr(0, 27)}...` : fullText;
        const buttonText = answered ? 'Go to poll' : 'Answer';
        return (
            <div className='block-box'>
                <div className='block-bar'>{author.name} asks:</div>
                <div className='block-body'>
                    <div className='block-image'>
                        <img src={author.avatarURL} alt={author.name}/>
                    </div>
                    <div className='block-content'>
                        <h3>Would you rather</h3>
                        <p>{displayText}</p>
                        <Link to={`/q/${question.id}`}>
                            <button className='block-content-button'>{buttonText}</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionBox;