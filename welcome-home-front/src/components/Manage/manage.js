import React, { Component } from "react"
import background from '../../images/bg-1.jpg'

class Manage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: 'reception'
        }
    }

    render() {
        return (
            
            <>
            <div id="app">
                {this.state.user === 'resident' ?
                'resident view'
                :
                ''
                }

                {this.state.user === 'reception' ?
                <div id="reception-app" style={styles.reception.app}>
                    
                    {/* Left side of page */}
                    <div id="reception-title" style={styles.reception.title}>
                        <h1>Reception Main Menu</h1>
                    </div>
                    <div id="reception-menu" style={styles.reception.menu}>
                        <button className="btn btn-success" style={styles.reception.menuButtons}>Add New Resident</button>
                        <button className="btn btn-success" style={styles.reception.menuButtons}>Update Resident's Information</button>
                        <button className="btn btn-danger" style={styles.reception.menuButtons}>Delete Resident</button>
                    </div>
                    
                    {/* Right side of page */}
                    <div id="reception-content" style={styles.reception.content}>
                        <p>CONTENT LOADED HERE... REACT HOOOOOAH!</p>
                    </div>
                </div>
                :
                ''
                }

                {this.state.user === 'admin' ?
                <p>admin view</p>
                :
                ''}

            </div>
            </>
        )
    }

}

const styles = {
    resident: {

    },

    reception: {
        app: {
            overflowY: 'scroll',
            display: 'grid',
            gridTemplateColumns: '50% 50%',
            gridTemplateRows: '20% 80%',
            padding: '3vh 0 0 0 ',
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '73vh'
        },
        title: {
            display: 'flex',
            gridArea: '1 / 1 / span 1 / span 1',
            justifyContent: 'center',
            alignItems: 'center'
        },
        menu: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '3vh 0 0 0',
            gridArea: '2 / 1 / span 1 / span 1'
        },
        menuButtons: {
            margin: '1vh 0 1vh 0'
        },
        content: {
            display: 'flex',
            gridArea: '1 / 2 / span 2 / span 1',
            alignItems: 'center',
            justifyContent: 'center'
        }
    },

    admin: {

    }
}

export default Manage