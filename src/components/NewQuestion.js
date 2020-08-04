import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

class NewQuestion extends Component{
    render(){
        if(!this.props.authedUser) return <Redirect to='/login'/>;
        return (
            <div>
                New Question
            </div>
        )
    }
}

export default connect(({authedUser})=>({authedUser}))(NewQuestion);