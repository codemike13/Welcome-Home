import React, { Component } from "react"
import background from '../../images/bg-1.jpg'
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
            deleteUser: false
        }
    }

    showNewResident = () => {
        this.setState({
            newUser: !this.state.newUser,
            updateUser: false,
            deleteUser: false
        })
    }

    showUpdateResident = () => {
        this.setState({
            newUser: false,
            updateUser: !this.state.updateUser,
            deleteUser: false
        })
    }

    showDeleteResident = () => {
        this.setState({
            newUser: false,
            updateUser: false,
            deleteUser: !this.state.deleteUser
        })
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
                        <button onClick={this.showNewResident} className="btn btn-success" style={styles.reception.menuButtons}>Add New Resident</button>
                        <button onClick={this.showUpdateResident} className="btn btn-success" style={styles.reception.menuButtons}>Update Resident's Information</button>
                        <button onClick={this.showDeleteResident} className="btn btn-danger" style={styles.reception.menuButtons}>Delete Resident</button>
                    </div>
                    
                    {/* Right side of page */}
                    <div id="reception-content" style={styles.reception.content}>
                        {this.state.newUser ? 
                        <NewResident />
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
            gridArea: '1 / 2 / span 2 / span 1',
            alignItems: 'center',
            justifyContent: 'center',
            overflowY: 'scroll'
        }
    },

    admin: {

    }
}

export default Manage