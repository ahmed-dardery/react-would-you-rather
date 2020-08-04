import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Question from './Question';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import NotFound from './NotFound';
import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";
import LoadingBar from 'react-redux-loading';
import Login from "./Login";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        const {loading} = this.props;
        return (
            <BrowserRouter>
                <Fragment>
                    <LoadingBar/>
                    <Nav/>
                    {!loading && <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/q/:id' component={Question}/>
                        <Route exact path='/add' component={NewQuestion}/>
                        <Route exact path='/leaderboard' component={Leaderboard}/>
                        <Route exact path='/login' component={Login}/>
                        <Route component={NotFound}/>
                    </Switch>}
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default connect(({loadingBar}) => ({loading: loadingBar.default}))(App);
