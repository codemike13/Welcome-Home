import React, { Component } from 'react'
import moment from 'moment'

class Calendar extends Component {
    constructor(props) {

        super(props)

        this.state = {
            today: moment(),
            dateContext: moment(),
            showMonth: false,
            showYear: false
        }

    }

    days = moment.weekdays();
    daysShort = moment.weekdaysShort();
    months = moment.months();

    year = () => {
        return this.state.dateContext.format("Y");
    }

    month = () => {
        return this.state.dateContext.format("MMMM")
    }

    daysInMonth = () => {
        return this.state.dateContext.daysInMonth()
    }

    currentDate = () => {
        return this.state.dateContext.get("date");
    }

    currentDay = () => {
        return this.state.dateContext.format("D")
    }

    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext
        let firstDay = moment(dateContext).startOf('month').format('d');
        return firstDay;
    }


    render() {
        let weekdays = this.daysShort.map((day) => {
            return (
                <td key={day}>{day}</td>
            )

        })
        return (
            <div style={styles.container}>
                <table>
                    <thead>
                        <tr>

                        </tr>
                    </thead>
                    <tbody>
                        {weekdays}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Calendar

const styles = {
    container: {
        textAlign: "center",
        width: "100vw",
        height: "60vh",
        border: "1px solid black"
    },
    weekDay: {
        textAlign: "center",
        height: "40px"
    }
}