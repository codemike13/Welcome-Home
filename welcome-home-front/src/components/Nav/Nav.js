import React, { Component } from 'react'
import { apiAuth, apiHandleLogIn } from '../../api/api'
import setAuthJWT from '../../api/setAuthJWT'
import skyviewLogo from '../../images/skyview-logo.png'

class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            isAuth: false,
            loggedInEmail: '',
            errorMessage: false,
            errorToggle: false
        }
    }

    componentDidMount = () => {
        apiAuth()
            .then(userObj => {
                this.setState({
                    isAuth: true,
                    loggedInEmail: userObj.email
                }, () => {
                    this.props.appHandleAuthSubmit()
                })
            })
            .catch(err => console.log(err))
    }

    handleInputOnChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleInputOnSubmit = (event) => {
        event.preventDefault()

        apiHandleLogIn({
            email: this.state.email,
            password: this.state.password
        })
            .then(result => {
                const { email } = result

                this.setState({
                    isAuth: true,
                    loggedInEmail: email,
                    email: '',
                    password: '',
                    errorToggle: false,
                    errorMessage: false
                }, () => {
                    this.props.appHandleAuthSubmit()
                })
            })
            .catch(errorMessage => {
                this.setState({
                    errorToggle: true,
                    errorMessage: errorMessage
                })
            })
    }

    logOut = () => {
        this.setState({
            isAuth: false
        }, () => {
            this.props.appHandleLogout()

            localStorage.removeItem('jwtToken')

            setAuthJWT(null)
        })
    }

    render() {
        return (
            <>
            <nav className='navbar navbar-light bg-light' style={styles.navFont}>
                <img src={skyviewLogo} alt="Skyview Properties Logo" style={styles.skyviewLogo}></img>
                { this.state.isAuth ? (
                    <>
                        <span>
                            { this.state.loggedInEmail }
                        </span>
                        <button 
                            className='btn btn-warning'
                            onClick={ this.logOut }
                        >
                            Log out
                        </button>
                    </>
                ) : (
                    <form 
                    className='form-inline'
                    onSubmit={ this.handleInputOnSubmit }
                    >
                        <input 
                            type='text' 
                            placeholder='email'    
                            className='form-control mr-sm-2'
                            name='email'
                            onChange={ this.handleInputOnChange }
                        />
                        <input 
                            type='text' 
                            placeholder='password' 
                            className='form-control mr-sm-2'
                            name='password'
                            onChange={ this.handleInputOnChange }
                        />
                        <button className='btn btn-outline-success my-2 my-sn-0'>Sign In</button>
                    </form>
                ) }
            </nav>
            <span
                style={{ padding: '0px' }}
                className={ this.state.errorToggle ? 'alert alert-danger' : '' }
            >
                { this.state.errorToggle ? this.state.errorMessage : '' }
            </span>
            </>
        )

        
    }
}

const styles = {
    navFont: {
        fontFamily: 'Oleo Script, cursive',
        background: 'linear-gradient(to right, skyBlue, white)',
        height: '10vh'
    },
    titleSize: {
        fontSize: '1.5em'
    },
    logo: {
        position: 'fixed',
        height: '20%',
        left: '40%'
    },
    skyviewLogo: {
        height: '100%'
    }
}


export default Nav

