import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/Nav/Nav'
import Panel from './components/Panels/Panels'
import Footer from './components/footer/Footer'

class App extends Component {
    state = {
        isAuth: false,
    };

    render() {
        return (
            <>
                <Nav />
                <Panel />
                <Footer />
            </>
        )
    }


}

ReactDOM.render(<App />, document.getElementById('root'));

