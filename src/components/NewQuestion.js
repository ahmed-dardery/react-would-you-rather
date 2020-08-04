import React, {Component} from 'react';
import {Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Block from "./Block";
import {handleAddQuestion} from "../actions/questions";

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: ''
    };
    updateOptionOne = (e) => (this.setState({optionOneText: e.target.value}));
    updateOptionTwo = (e) => (this.setState({optionTwoText: e.target.value}));
    noneEmpty = () => (this.state.optionOneText.trim() && this.state.optionTwoText.trim());

    onClick = (e) => {
        e.preventDefault();
        const {authedUser, history} = this.props;
        const {optionOneText, optionTwoText} = this.state;
        const callback = (id) => history.push(`/q/${id}`);
        this.props.dispatch(handleAddQuestion({author: authedUser, optionOneText, optionTwoText, callback}));
    };

    render() {
        if (!this.props.authedUser) return <Redirect to='/login'/>;
        const {optionOneText, optionTwoText} = this.state;
        return (
            <div className="window">
                <Block title="Create New Question" innerContent={
                    <form>
                        <div>Would you rather...</div>
                        <input type="text" onChange={this.updateOptionOne} value={optionOneText}
                               placeholder="Enter first option here"/>
                        <p className='block-content-center'>Or</p>
                        <input type="text" onChange={this.updateOptionTwo} value={optionTwoText}
                               placeholder="Enter first option here"/>
                        <button onClick={this.onClick} disabled={!this.noneEmpty()}
                                className='block-content-button'>Submit
                        </button>
                    </form>
                }/>
            </div>
        )
    }
}

export default withRouter(connect(({authedUser}) => ({authedUser}))(NewQuestion));