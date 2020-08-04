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
                        {answered.map(q => <li key={q.id}>{questions[q.id].author}</li>)}
                    </ul>
                </div>
                <div>
                    <div>Unanswered</div>
                    <ul>
                        {unanswered.map(q => <li key={q.id}>{questions[q.id].author}</li>)}
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
    Object.keys(questions).forEach(id => {
        const choice = findPick(questions[id]);
        if (choice !== 0) answered.push({id, choice});
        else unanswered.push({id, choice: 0});
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