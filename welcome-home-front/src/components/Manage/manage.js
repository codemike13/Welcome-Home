import React, { Component } from "react"
import background from '../../images/bg-1.jpg'
import reception from '../../images/reception.jpg'
import NewResident from './NewResident'
import UpdateResident from './UpdateResident'
import DeleteResident from './DeleteResident'

class Manage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: 'reception',
            newUser: false,
            updateUser: false,
            deleteUser: false,
            landing: true
        }
    }

    showNewResident = () => {
        this.setState({
            newUser: !this.state.newUser,
            updateUser: false,
            deleteUser: false,
            landing: !this.state.landing
        })
        const checkUpdate = document.querySelector(`#updateResButton`).disabled
        document.querySelector(`#updateResButton`).disabled = !checkUpdate

        const checkDel = document.querySelector(`#deleteResButton`).disabled
        document.querySelector(`#deleteResButton`).disabled = !checkDel
    }

    showUpdateResident = () => {
        this.setState({
            newUser: false,
            updateUser: !this.state.updateUser,
            deleteUser: false,
            landing: !this.state.landing
        })

        const checkNew = document.querySelector(`#newResButton`).disabled
        document.querySelector(`#newResButton`).disabled = !checkNew

        const checkDel = document.querySelector(`#deleteResButton`).disabled
        document.querySelector(`#deleteResButton`).disabled = !checkDel
    }

    showDeleteResident = () => {
        this.setState({
            newUser: false,
            updateUser: false,
            deleteUser: !this.state.deleteUser,
            landing: !this.state.landing
        })

        const checkNew = document.querySelector(`#newResButton`).disabled
        document.querySelector(`#newResButton`).disabled = !checkNew

        const checkUpdate = document.querySelector(`#updateResButton`).disabled
        document.querySelector(`#updateResButton`).disabled = !checkUpdate
    }

    render() {
        return (
            
            <>
            <div id="app">

                {/* Resident View */}
                {this.state.user === 'resident' ?
                'resident view'
                :
                ''
                }

                {/* Reception View */}
                {this.state.user === 'reception' ?
                <div id="reception-app" style={styles.reception.app}>
                    
                    {/* Left side of page */}
                    <div id="reception-title" style={styles.reception.title}>
                        <h2>Reception Management Menu</h2>
                    </div>
                    <div id="reception-menu" style={styles.reception.menu}>
                        <button onClick={this.showNewResident} className="btn btn-success" id="newResButton" style={styles.reception.menuButtons}>Add New Resident</button>
                        <button onClick={this.showUpdateResident} className="btn btn-success" id="updateResButton" style={styles.reception.menuButtons}>Update Resident's Information</button>
                        <button onClick={this.showDeleteResident} className="btn btn-danger" id="deleteResButton" style={styles.reception.menuButtons}>Delete Resident</button>
                    </div>
                    
                    {/* Right side of page */}
                    <div id="reception-content" style={styles.reception.content}>
                        {this.state.newUser ? 
                        <NewResident
                            cancelCreate = {this.showNewResident}
                        />
                        :
                        ''
                        }

                        {this.state.updateUser ?
                        <UpdateResident />
                        :
                        ''
                        }

                        {this.state.deleteUser ?
                        <DeleteResident />
                        :
                        ''
                        }

                        {this.state.landing ?
                        <>
                        <img src={reception} alt="A cartoon of a woman sitting at a reception desk" style={styles.reception.landingIMG} />
                        <p className="my-3">Please select a menu option</p>
                        </>
                        :
                        ''
                        }
                    </div>
                </div>
                :
                ''
                }

                {/* Admin View */}
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
            display: 'grid',
            gridTemplateColumns: '40% 60%',
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
            margin: '1vh 0 1vh 0',
            border: '1px solid black'
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            gridArea: '1 / 2 / span 2 / span 1',
            alignItems: 'center',
            justifyContent: 'center',
            overflowY: 'scroll'
        },
        landingIMG: {
            height: '60%',
            width: '45%',
            borderRadius: '5px'
        }
    },

    admin: {

    }
}

export default Manage