import React, { Component } from 'react'
import Drawer from 'react-drag-drawer'
import Transition from 'react-addons-css-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools, faMailBulk, faCalendarAlt, faUserCog, faCommentDollar, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { cx, css } from 'emotion'

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
                        <button
                            className={cx(panelBx)}
                            style={{ outline: "none" }}
                            onClick={() => {
                                this.props.Clicked(1)
                            }}
                        >
                            <FontAwesomeIcon
                                style={styles.panelIcon}
                                icon={faUserCog}
                            />
                        </button>
                        <button
                            className={cx(panelBx)}
                            style={{ outline: "none" }}
                            onClick={() => {
                                this.props.Clicked(2)
                            }}
                        >
                            <FontAwesomeIcon
                                style={styles.panelIcon}
                                icon={faTools} />
                        </button>
                        <button
                            className={cx(panelBx)}
                            style={{ outline: "none" }}
                            onClick={() => {
                                this.props.Clicked(3)
                            }}
                        >
                            <FontAwesomeIcon
                                style={styles.panelIcon}
                                icon={faMailBulk}
                            />
                        </button>
                        <button
                            className={cx(panelBx)}
                            style={{ outline: "none" }}
                            onClick={() => {
                                this.props.Clicked(4)
                            }}
                        >
                            <FontAwesomeIcon
                                style={styles.panelIcon}
                                icon={faCalendarAlt}
                            />
                        </button>
                        <button
                            className={cx(panelBx)}
                            style={{ outline: "none" }}
                            onClick={() => {
                                this.props.Clicked(5)
                            }}
                        >
                            <FontAwesomeIcon
                                style={styles.panelIcon}
                                icon={faCommentDollar}
                            /></button>

                    </section>
                    <div style={styles.panelButton}
                        onClick={this.toggle}
                        open={openBox}
                    >
                        <FontAwesomeIcon
                            style={openBox ? styles.chevronDown : styles.chevronUp}
                            icon={faChevronCircleDown}
                        />
                    </div>
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

const panelBx = css`
        textAlign: center;
        width: 25%;
        height: 15vh;
        border: none;
        outline: none;
    
`



const styles = {
    panelUp: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(0,25,0,0.2)",
        // border: '1px solid black',
        width: "100vw",
        height: "7vh",
        transition: " .1s "

    },
    panelDown: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(0,25,0,0.2)",
        // border: '1px solid black',
        width: "100vw",
        height: "20vh",
        // transition: " .1s "
    },
    panelButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "7vh",
        // border: "1px solid black",
        alignSelf: "flex-end"

    },
    panelBox: {
        textAlign: "center",
        width: "25%",
        height: "15vh",
        border: "none",
        outline: "none"
        // border: "1px solid black"
    },
    panelIcon: {
        width: "25%",
        height: "15vh",
    },
    chevronDown: {
        width: "10%",
        height: "5vh",
        transition: "display .3s ease-out"

    },
    chevronUp: {
        width: "10%",
        height: "5vh",
        transform: "rotatez(180deg)",
        transition: "display .3s ease-out"

    },
    panelShow: {
        display: "flex",
        flexDirection: "row",
        // border: '1px solid black',
        transition: "display .3s ease-out"

    },
    panelHide: {
        display: "none",
        flexDirection: "row",
        // border: '1px solid black',
        transition: "display .3s ease-in"
    }

}