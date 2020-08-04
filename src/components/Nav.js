import React, {Component} from 'react';
import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {clearAuthedUser} from "../actions/authedUser";

class Nav extends Component {
    logOut_click = (e) => {
        e.preventDefault();

        const {dispatch} = this.props;
        dispatch(clearAuthedUser());
        this.props.history.push('/login');
    };

    render() {
        const {user, authedUser} = this.props;
        return (
            <ul className="nav-bar">
                <li>
                    <NavLink className="nav-bar-link" exact to='/' activeClassName='nav-bar-active'>Home</NavLink>
                </li>
                <li>
                    <NavLink className="nav-bar-link" to="/add" activeClassName='nav-bar-active'>New Question</NavLink>
                </li>
                <li>
                    <NavLink className="nav-bar-link" to="/leaderboard"
                             activeClassName='nav-bar-active'>Leaderboard</NavLink>
                </li>
                <li className="nav-bar-user">
                    {authedUser ?
                        <span className="nav-bar-link"
                              onClick={this.logOut_click}>Logout</span>
                        :
                        <NavLink className="nav-bar-link" to="/login" activeClassName='nav-bar-active'>Login</NavLink>
                    }

                </li>
                {authedUser && <span className="nav-bar-text">Hello {user.name}</span>}
            </ul>
        )
    }
}

function mapStateToProps({users, authedUser}) {
    return {authedUser, user: users[authedUser]};
}

export default withRouter(connect(mapStateToProps)(Nav));