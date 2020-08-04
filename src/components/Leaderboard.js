import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import Block from "./Block";
import {nth} from "../utils/helper";

class Leaderboard extends Component {
    render() {
        const {userIds, users} = this.props;
        console.log(users);
        return (
            <div className="window">
                <ol className='view-block'>

                    {userIds.map((id,i) => {
                        const user = users[id];
                        const answers = Object.keys(user.answers).length;
                        const questions = user.questions.length;

                        return (
                            <li key={id}>
                                <Block centerTitle corner={nth(i+1)} imageInfo={{url: user.avatarURL, alt: user.name}} title={user.name}
                                       innerContent={
                                           <Fragment>
                                               <div>Answered Questions: {answers}</div>
                                               <div>Created Questions: {questions}</div>
                                               <div>Total Score: {answers + questions}</div>
                                           </Fragment>
                                       }/>
                            </li>
                        );
                    })}
                </ol>
            </div>
        )
    }
}


function mapStateToProps({users}) {
    let userIds = Object.keys(users);

    const score = (user) => (user.questions + user.answers);

    userIds.sort((a, b) => score(users[a]) - score(users[b]));

    return {
        userIds,
        users
    }
}

export default connect(mapStateToProps)(Leaderboard);