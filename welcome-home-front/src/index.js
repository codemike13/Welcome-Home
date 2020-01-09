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
            <div style={styles.app}>
                <Nav />
                <Panel />
                <Footer />
            </div>
        )
    }


}

const styles = {
    app: {
        display: "flex",
        flexDirection: "column",
        height: '100vh',
        // border: "5px solid black"
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
