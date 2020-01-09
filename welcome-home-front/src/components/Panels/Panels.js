import React, { Component } from 'react'
import Drawer from 'react-drag-drawer'
import Transition from 'react-addons-css-transition-group';

class Panel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isAuth: false,
            openBox: false
        }
    }


    openBox = () => {
        this.setState({
            openBox: !this.state.openBox,
        })
    }

    // toggle = (type, value) => event => {
    //     this.setState(state => {
    //         return {
    //             [type]: value
    //         };
    //     });
    // };

    toggle = () => {
        this.setState(prevState => ({
            openBox: !prevState.openBox
        }));
    }


    render() {
        const {
            openBox
        } = this.state;
        return (
            <>
                {/* <Transition> */}
                <div style={openBox ? styles.panelDown : styles.panelUp}>
                    <section style={openBox ? styles.panelShow : styles.panelHide}>
                        <div style={styles.panelBox}> Admin</div>
                        <div style={styles.panelBox}> Maintenance</div>
                        <div style={styles.panelBox}> Mail</div>
                        <div style={styles.panelBox}>Calendar</div>

                    </section>
                    <div style={styles.panelButton}
                        onClick={this.toggle}
                        open={openBox}
                    >
                        here >> </div>
                </div>
                {/* </Transition> */}

                {/* <div onClick={this.toggle("openBox", true)}> Click </div>
                <Drawer
                    style={styles.panel}
                    containerOpacity={0.9}
                    open={openBox}
                    onRequestClose={this.toggle("openBox", false)}
                    direction={'left'}
                >
                    <div className={'fileUpload'}>
                        I'm in a drawer!
            <button onClick={this.toggle("openBox", false)}>
                            Close drawer
            </button>
                    </div>
                </Drawer> */}
            </>
        )
    }

}

export default Panel

const styles = {
    panelUp: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(0,25,0,0.2)",
        border: '1px solid black',
        width: "100vw",
        height: "5vh",

    },
    panelDown: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(0,25,0,0.2)",
        border: '1px solid black',
        width: "100vw",
        height: "20vh",
        transition: "height .1s "
    },
    panelButton: {
        textAlign: "center",
        backgroundColor: "red",
        width: "100%",
        height: "5vh",
    },
    panelBox: {
        width: "25%",
        height: "15vh",
        border: "1px solid black"
    },
    panelShow: {
        display: "flex",
        flexDirection: "row",
        border: '1px solid black',
        transition: "display .3s ease-out"

    },
    panelHide: {
        display: "none",
        flexDirection: "row",
        border: '1px solid black',
        transition: "display .3s ease-in"
    }

}