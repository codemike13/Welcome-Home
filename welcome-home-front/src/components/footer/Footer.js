const Footer = () => {
    return (
        <>
        <div id="main" style={styles.main}>
            <div id="main-left" style={styles.mainLeft}>

            </div>

            <div id="main-center" style={styles.mainCenter}>

            </div>

            <div id="main-right" style={styles.mainRight}>

            </div>

        </div>
        </>
    )
}

const styles = {
    main: {
        width: '100vw',
        height: '15vh',
        backgroundColor: 'gray',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '100%'
    },
    mainLeft: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '1 / 1 / span 1 / span 1'
    },
    mainCenter: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '1 / 2 / span 1 / span 1'
    },
    mainRight: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '1 / 3 / span 1 / span 1'
    }
}

export default Footer