import React from 'react'
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <>
            <div id="main" style={styles.main}>
                <div id="main-left" style={styles.mainLeft}>
                    <img src={logo} style={styles.logo} alt="Welcome Home logo"></img>(Copyright Information)
            </div>

                <div id="main-center" style={styles.mainCenter}>
                    (Contact Information)
            </div>

                <div id="main-right" style={styles.mainRight}>
                    (Other Links)
            </div>

            </div>
        </>
    )
}

const styles = {
    main: {
        alignSelf: "flex-end",
        width: '100vw',
        height: '10vh',
        backgroundColor: 'lightGray',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '100%'
    },
    mainLeft: {
        display: 'flex',
        gridArea: '1 / 1 / span 1 / span 1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: '130%',
    },
    mainCenter: {
        display: 'flex',
        gridArea: '1 / 2 / span 1 / span 1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainRight: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '1 / 3 / span 1 / span 1',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default Footer