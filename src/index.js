import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './mvp.css'
import { ChallengesProvider } from './ChallengesContext';

ReactDOM.render(
    <React.StrictMode>
        <ChallengesProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ChallengesProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
