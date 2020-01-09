import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/Nav/Nav'
import Panel from './components/Panels/Panels'

class App extends Component {
    state = {
        isAuth: false,
    };

    render() {
        return (
            <>
                <Nav />
                <Panel />
            </>
        )
    }


}

ReactDOM.render(<App />, document.getElementById('root'));

