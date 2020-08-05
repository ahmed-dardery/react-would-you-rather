import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link, Redirect} from "react-router-dom";
import QuestionBox from "./QuestionBox";
import {findPick} from "../utils/helper";

class Home extends Component {
    state = {
        tab: 0
    };

    render() {
        if (!this.props.authedUser) return <Redirect to='/login'/>;

        const {answered, unanswered, questions, users} = this.props;

        const lister = (list, done) => {
            if (list.length === 0)
                return (
                    <div className="block-content-center">
                        No questions! Why not <Link to='/add'>add a new one</Link>?
                    </div>
                );
            return list.map(q => {
                    const ques = questions[q.id];
                    const auth = users[ques.author];
                    return (
                        <li key={q.id}>
                            <QuestionBox question={ques} author={auth} answered={done}/>
                        </li>
                    );
                }
            )
        };

        const {tab} = this.state;
        return (
            <div className="window">
                <div className="tab-bar">
                    <button className={`tab-link ${tab === 0 && 'active'}`}
                            onClick={() => this.setState({tab: 0})}>Unanswered
                    </button>
                    <button className={`tab-link ${tab === 1 && 'active'}`}
                            onClick={() => this.setState({tab: 1})}>Answered
                    </button>
                </div>
                {tab === 0 ?
                    <div className='tab-window'>
                        <ul className='view-block'>
                            {lister(unanswered, false)}
                        </ul>
                    </div> :
                    <div className='tab-window'>
                        <ul className='view-block'>
                            {lister(answered, true)}
                        </ul>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}) {
    if (authedUser === null) return {authedUser: null};

    let answered = [];
    let unanswered = [];
    Object.keys(questions).forEach(id => {
        const choice = findPick(questions[id], authedUser);
        if (choice !== 0) answered.push({id, choice});
        else unanswered.push({id, choice: 0});
    });
    const comp = (a, b) => (questions[b.id].timestamp - questions[a.id].timestamp);
    answered.sort(comp);
    unanswered.sort(comp);
    return {
        authedUser,
        users,
        questions,
        answered,
        unanswered,
    }
}

export default connect(mapStateToProps)(Home);