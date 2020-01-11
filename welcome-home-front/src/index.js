import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/Nav/Nav'
import Panel from './components/Panels/Panels'
import Card from './components/Card/Card'
import Calendar from './components/Calendar/Calendar'
import Footer from './components/footer/Footer'

class App extends Component {
    state = {
        isAuth: false,
        pane: 0,
        currentPane: null,
    };




    render() {
        return (
            <div style={styles.app}>
                <Nav />
                <Panel />
                <Calendar />
                {/* <Card /> */}
                <Footer />
            </div>
        )
    }


}

const styles = {
    app: {
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        flexDirection: "column",
        height: '100vh',
        // border: "5px solid black"
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
