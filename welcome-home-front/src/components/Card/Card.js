import React, { Component } from 'react'



class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }
    render() {
        return (
            <div style={styles.cardContainer}> here is card </div>
        )
    }
}

export default Card

const styles = {
    cardContainer: {
        display: "flex",
        border: "1px solid black",
        width: "100vw",
        height: "75vh"
    }
}