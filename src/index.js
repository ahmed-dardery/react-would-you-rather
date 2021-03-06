import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from "redux";
import reducer from "./reducers";
import middleware from "./middleware";
import {Provider} from "react-redux";
import './index.css'
import registerServiceWorker from "./utils/registerServiceWorker";

const store = createStore(reducer, middleware);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
    ,
    document.getElementById('root')
);
registerServiceWorker();