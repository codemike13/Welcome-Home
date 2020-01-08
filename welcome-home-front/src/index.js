import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/Nav/Nav'

class App extends Component {
    state = {
        isAuth: false,
    };

    render() {
        return (
            <Nav />
        )
    }


}

ReactDOM.render(<App />, document.getElementById('root'));

