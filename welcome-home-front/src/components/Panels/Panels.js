import React, { Component } from 'react'
import Drawer from 'react-drag-drawer'


class Panel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isAuth: false
        }
    }


    openBox = () => {
        this.setState({
            openBox: !this.state.openBox,
        })
    }

    toggle = (type, value) => event => {
        this.setState(state => {
            return {
                [type]: value
            };
        });
    };



    render() {
        const {
            openBox
        } = this.state;
        return (
            <>
                <div style={styles.panel}> here I Am </div>

                <div onClick={this.toggle("openBox", true)}> Click </div>
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
                </Drawer>
            </>
        )
    }

}

export default Panel

const styles = {
    panel: {
        backgroundColor: "rgba(0,25,0,0.2)",
        border: '1px solid black',
        width: "20vw",
        height: "90vh"
    }
}