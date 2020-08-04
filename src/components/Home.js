import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Home extends Component {
    render() {
        if (!this.props.authedUser) return <Redirect to='/login'/>;

        const {answered, unanswered, questions} = this.props;
        return (
            <div>
                <div>
                    <div>Answered</div>
                    <ul>
                        {answered.map(q => <li key={q}>{questions[q].author}</li>)}
                    </ul>
                </div>
                <div>
                    <div>Unanswered</div>
                    <ul>
                        {unanswered.map(q => <li key={q}>{questions[q].author}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}) {
    if (authedUser === null) return {authedUser: null};

    const findPick = (q) => {
        if (q.optionOne.votes.includes(authedUser)) return 1;
        if (q.optionTwo.votes.includes(authedUser)) return 2;
        return 0;
    };

    let answered = [];
    let unanswered = [];
    Object.keys(questions).forEach(key => {
        const pick = findPick(questions[key]);
        if (pick !== 0) answered.push({key, pick});
        else unanswered.push(key);
    });
    return {
        authedUser,
        users,
        questions,
        answered,
        unanswered
    }
}

export default connect(mapStateToProps)(Home);