import React, {Component} from 'react';
import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {clearAuthedUser} from "../actions/authedUser";

class Nav extends Component {
    logOut_click = (e) => {
        e.preventDefault();

        const {dispatch, history} = this.props;
        dispatch(clearAuthedUser());
        history.push('/login', history.location);
    };

    render() {
        const {user, authedUser} = this.props;
        return (
            <ul className="nav-bar">
                <span className="nav-bar-title nav-bar-left">Would You Rather?</span>
                <li className="nav-bar-left">
                    <NavLink className="nav-bar-link" exact to='/' activeClassName='nav-bar-active'>Home</NavLink>
                </li>
                <li className="nav-bar-left">
                    <NavLink className="nav-bar-link" to="/add" activeClassName='nav-bar-active'>New Question</NavLink>
                </li>
                <li className="nav-bar-left">
                    <NavLink className="nav-bar-link" to="/leaderboard"
                             activeClassName='nav-bar-active'>Leaderboard</NavLink>
                </li>
                <li className="nav-bar-right">
                    {authedUser ?
                        <span className="nav-bar-link"
                              onClick={this.logOut_click}>Logout</span>
                        :
                        <NavLink className="nav-bar-link" to="/login" activeClassName='nav-bar-active'>Login</NavLink>
                    }

                </li>
                {authedUser && <span className="nav-bar-text nav-bar-right">Hello {user ? user.name : authedUser}</span>}
            </ul>
        )
    }
}

function mapStateToProps({users, authedUser}) {
    return {authedUser, user: users[authedUser]};
}

export default withRouter(connect(mapStateToProps)(Nav));