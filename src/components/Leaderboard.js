import React, {Component} from 'react';
import {connect} from "react-redux";

class Leaderboard extends Component {
    render() {
        const {userIds, users} = this.props;
        return (
            <div>
                <ol>
                    {userIds.map(id => <li key={id}>{users[id].name}</li>)}
                </ol>
            </div>
        )
    }
}


function mapStateToProps({users}) {
    const score = (user) => user.answers.length + user.questions.length;
    let ret = {
        userIds: Object.keys(users),
        users
    };
    ret.userIds.sort((a, b) => score(users[b]) - score(users[a]));
    return ret;
}

export default connect(mapStateToProps)(Leaderboard);