import React, { Component } from 'react'
import Calendar, { MonthView } from 'react-calendar'

class Cal extends Component {
    state = {
        date: new Date(),
    }


    render() {
        const year = new Date().getFullYear();
        const months = [];
        for (let monthIndex = 0; monthIndex < 12; monthIndex += 1) {
            months.push(<MonthView activeStartDate={new Date(year, monthIndex)} />);
        }
        return (
            <div>
                {months}
            </div>
        )
    }
}

export default Cal