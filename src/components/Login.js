import React, {Component} from 'react';
import {connect} from "react-redux";
import {setAuthedUser} from "../actions/authedUser";
import {Redirect} from "react-router-dom";

class Login extends Component {
    state = {
        selected: 'none',
    };

    login_click = (e) => {
        e.preventDefault();

        const {selected} = this.state;
        this.props.dispatch(setAuthedUser(selected));
    };

    select_change = (e) => {
        this.setState({selected: e.target.value});
    };

    render() {
        const {selected} = this.state;
        const {authedUser} = this.props;
        if (authedUser) return <Redirect to='/'/>;

        const {users} = this.props;
        return (
            <form onSubmit={this.login_click}>
                Login as:
                <select value={selected} onChange={this.select_change}>
                    <option value="none" disabled>Select a user</option>
                    {
                        Object.keys(users).map(user =>
                            <option key={user} value={user}>{users[user].name}</option>
                        )
                    }
                </select>
                <button disabled={selected === 'none'} type="submit">Login</button>
            </form>
        )
    }
}

export default connect(({users, authedUser}) => ({users, authedUser}))(Login);