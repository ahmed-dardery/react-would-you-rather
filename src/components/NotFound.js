import React, {Component} from 'react';

class NotFound extends Component{
    render(){
        return (
            <div className="window">
                <div className="error-404">404</div>
                <div className="error-note">That's sad!</div>
                <div className="error-msg">The page you are looking for doesn't exist, or is unavailable</div>
                {/*<button className="block-content-button">Go to Homepage</button>*/}
            </div>
        )
    }
}

export default NotFound;