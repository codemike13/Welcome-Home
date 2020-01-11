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
                <td key={day} style={styles.weekDay}>{day}</td>
            )

        });

        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(
                <td style={styles.weekDay}>
                    {""}
                </td>
            );
        }

        let daysInMonth = []

        for (let d = 1; d <= this.daysInMonth(); d++) {
            daysInMonth.push(
                <td key={d} style={this.currentDay() ? styles.currentDay : styles.weekDay}>
                    <span style={{ marginRight: "50px" }}>{d}</span>
                </td>
            )
        }

        let totalSlots = [...blanks, ...daysInMonth];
        let rows = [];
        let cells = [];

        totalSlots.forEach((row, i) => {
            if ((i % 7) !== 0) {
                cells.push(row);
            } else {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }
            if (i === totalSlots.length - 1) {
                let insertRow = cells.slice();
                rows.push(insertRow);
            }
        })

        let trElems = rows.map((d, i) => {
            return (
                <tr key={i * 100}>
                    {d}
                </tr>
            )
        })

        return (
            <div style={styles.container}>
                <table style={styles.calendar}>
                    <thead>
                        <tr>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {weekdays}
                        </tr>
                        {trElems}
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
        // border: "1px solid black"

    },
    weekDay: {
        textAlign: "center",
        height: "40px",
        // border: "1px solid black",
        marginRight: "50px"
    },
    calendar: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "row",
        // border: "1px solid black",

        // backgroundColor: "yellow",
        borderSpacing: "0",
        width: "100%",
        height: "60vh"

    },
    currentDay: {
        backgroundColor: "lightBlue",
        width: "13vw",
        height: "10vh",
        // border: "1px solid black",
        borderRadius: "15px",

    }



}