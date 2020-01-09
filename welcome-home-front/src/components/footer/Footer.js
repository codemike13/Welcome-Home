import React from 'react'

const Footer = () => {
    return (
        <>
        <div id="main" style={styles.main}>
            <div id="main-left" style={styles.mainLeft}>
                (Copyright placeholder)
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
        width: '100vw',
        height: '10vh',
        backgroundColor: 'gray',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '100%'
    },
    mainLeft: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '1 / 1 / span 1 / span 1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainCenter: {
        display: 'flex',
        flexDirection: 'column',
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