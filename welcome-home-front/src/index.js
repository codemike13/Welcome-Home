import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/Nav/Nav'
import Panel from './components/Panels/Panels'
import Manage from "./components/Manage/manage"
import Card from './components/Card/Card'
import Calendar from './components/Calendar/Calendar'
import Footer from './components/footer/Footer'

class App extends Component {
    state = {
        isAuth: false,
        pane: 0,
        currentPane: null,
    };


    Clicked = val => {
        switch (val) {
            case 1:
                this.currentPane = <Manage />;
                break;
            case 2:
                this.currentPane = <h1>Maintenance </h1>;
                break;
            case 3:
                this.currentPane = <h1>Mailer </h1>;
                break;
            case 4:
                this.currentPane = <Calendar />;
                break;
            case 5:
                this.currentPane = <h1>MarketPlace</h1>;
                break;
            default:
                break;
        }
        this.setState({
            pane: val
        });
    };


    render() {
        return (
            <div style={styles.app}>
                <Nav />
                <Panel
                    pane={this.state.pane}
                    Clicked={this.Clicked}
                />
                {this.currentPane}
                {/* <Calendar /> */}
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
