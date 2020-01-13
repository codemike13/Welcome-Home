import React, { Component } from 'react'
import Select from 'react-select'
import { apiHandleCreateResident } from '../../api/api'

class NewResident extends Component {
    constructor(props){
        super(props)

        this.state = {
            stateSelect: { label: this.props.value, value: this.props.value },
            textMessageAuth: 'false',
            notifyMaintenance: 'false',
            notifyEvent: 'false'
        }
    }

    options = [
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    { value: "AZ", label: "Arizona" },
    { value: "AR", label: "Arkansas" },
    { value: "CA", label: "California" },
    { value: "CO", label: "Colorado" },
    { value: "CT", label: "Connecticut" },
    { value: "DE", label: "Delaware" },
    { value: "DC", label: "District of Columbia" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "HI", label: "Hawaii" },
    { value: "ID", label: "Idaho" },
    { value: "IL", label: "Illinois" },
    { value: "IN", label: "Indiana" },
    { value: "IA", label: "Iowa" },
    { value: "KS", label: "Kansas" },
    { value: "KY", label: "Kentucky" },
    { value: "LA", label: "Louisiana" },
    { value: "ME", label: "Maine" },
    { value: "MD", label: "Maryland" },
    { value: "MA", label: "Massachusetts" },
    { value: "MI", label: "Michigan" },
    { value: "MN", label: "Minnesota" },
    { value: "MS", label: "Mississippi" },
    { value: "MO", label: "Missouri" },
    { value: "MT", label: "Montana" },
    { value: "NE", label: "Nebraska" },
    { value: "NV", label: "Nevada" },
    { value: "NH", label: "New Hampshire" },
    { value: "NJ", label: "New Jersey" },
    { value: "NM", label: "New Mexico" },
    { value: "NY", label: "New York" },
    { value: "NC", label: "North Carolina" },
    { value: "ND", label: "North Dakota" },
    { value: "OH", label: "Ohio" },
    { value: "OK", label: "Oklahoma" },
    { value: "OR", label: "Oregon" },
    { value: "PA", label: "Pennsylvania" },
    { value: "RI", label: "Rhode Island" },
    { value: "SC", label: "South Carolina" },
    { value: "SD", label: "South Dakota" },
    { value: "TN", label: "Tennessee" },
    { value: "TX", label: "Texas" },
    { value: "UT", label: "Utah" },
    { value: "VT", label: "Vermont" },
    { value: "VA", label: "Virginia" },
    { value: "WA", label: "Washington" },
    { value: "WV", label: "West Virginia" },
    { value: "WI", label: "Wisconsin" },
    { value: "WY", label: "Wyoming" }
    ]

    handleChange(data) {
        this.setState({
            stateSelect: {
                value: data.value,
                label: data.label
            }
        })
    }

    handleTextChange = (event) => {
        this.setState({
            textMessageAuth: event.target.value
        })
    }

    appCreateResident = () => {
        const data = {
            firstName: document.querySelector(`#firstName`).value,
            middleName: document.querySelector(`#middleName`).value,
            lastName: document.querySelector(`#lastName`).value,
            email: document.querySelector(`#email`).value,
            unit: document.querySelector(`#unit`).value,
            homeNumber: document.querySelector(`#homeNumber`).value,
            cellNumber: document.querySelector(`#cellNumber`).value,
            workNumber: document.querySelector(`#workNumber`).value,
            faxNumber: document.querySelector(`#faxNumber`).value,
            textMessageAuth: this.state.textMessageAuth,
            notifyMaintenance: this.state.notifyMaintenance,
            notifyEvent: this.state.notifyEvent,
            emergencyContact: {
                emgName: document.querySelector(`#emgName`).value,
                emgAddress: document.querySelector(`#emgAddress`).value,
                emgNumber: document.querySelector(`#emgNumber`).value,
            },
            altMailing: {
                name: document.querySelector(`#altMailingName`).value,
                address: document.querySelector(`#altMailingAddress`).value,
                city: document.querySelector(`#altMailingCity`).value,
                state: this.state.stateSelect.value,
                zip: document.querySelector(`#altMailingZip`).value
            },
            insurance: {
                type: document.querySelector(`#insType`).value,
                company: document.querySelector(`#insCompany`).value,
                policy: document.querySelector(`#insPolicy`).value,
                liability: document.querySelector(`#insLiability`).value,
                property: document.querySelector(`#insProp`).value
            }
        }
        apiHandleCreateResident(data)
    }


render() {
    return(
        <>
        <div id="app" style={styles.app}>
            <div id="title">
                <h3>Create New Resident</h3>
            </div>
            <div id="form" style={styles.form}>
                <input style={styles.input} type="text" id="firstName" name="firstName" placeholder="First Name" />
                <input style={styles.input} type="text" id="middleName" name="middleName" placeholder="Middle Name" />
                <input style={styles.input} type="text" id="lastName" name="lastName" placeholder="Last Name" />
                <input style={styles.input} type="text" id="email" name="email" placeholder="Email Address" />
                <input style={styles.input} type="text" id="unit" name="unit" placeholder="Unit" />
                <input style={styles.input} type="text" id="homeNumber" name="homeNumber" placeholder="Home Phone Number" />
                <input style={styles.input} type="text" id="cellNumber" name="cellNumber" placeholder="Home Phone Number" />
                <input style={styles.input} type="text" id="workNumber" name="workNumber" placeholder="Work Phone Number" />
                <input style={styles.input} type="text" id="faxNumber" name="faxNumber" placeholder="Fax Number" />

                <p>Text Message Authorization?</p>
                <span><input type="radio" className="mx-3" name="textMessageAuth" value="true" onChange={this.handleTextChange} />Yes</span>
                <span><input type="radio" className="mx-3 mb-5" name="textMessageAuth" value="false" onChange={this.handleTextChange} defaultChecked />No</span>

                <p>Notify Maintenance?</p>
                <span><input type="radio" className="mx-3" name="notifyMaintenance" value="true" />Yes</span>
                <span><input type="radio" className="mx-3 mb-5" name="notifyMaintenance" value="false" defaultChecked />No</span>

                <p>Get Event Notifications?</p>
                <span><input type="radio" className="mx-3" name="notifyEvent" value="true" />Yes</span>
                <span><input type="radio" className="mx-3 mb-5" name="notifyEvent" value="false" defaultChecked />No</span>

                <hr style={styles.hr} />

                <p className="mt-3">Emergency Contact:</p>
                <input style={styles.input} type="text" id="emgName" name="emgName" placeholder="Full Name" />
                <input style={styles.input} type="text" id="emgAddress" name="emgAddress" placeholder="Address" />
                <input style={styles.input} type="text" id="emgNumber" name="emgNumber" placeholder="Contact Number" />

                <hr style={styles.hr} />

                <p className="mt-3">Alternate Mailing Address:</p>
                <input style={styles.input} type="text" id="altMailingName" name="altMailingName" placeholder="Name" />
                <input style={styles.input} type="text" id="altMailingAddress" name="altMailingAddress" placeholder="Street Address" />
                <input style={styles.input} type="text" id="altMailingCity" name="altMailingCity" placeholder="City" />
                <Select className="mb-3"
                    options={this.options}
                    value={this.state.stateSelect}
                    onChange={value => this.handleChange(value)}
                />
                <input style={styles.input} type="text" id="altMailingZip" name="altMailingZip" placeholder="Zip Code" />

                <hr style={styles.hr} />

                <p className="mt-3">Insurance:</p>
                <select style={styles.dropdown} id="insType" name="insType">
                    <option value="renters">Renter's</option>
                    <option value="homeOwner">Home Owner's</option>
                </select>
                <input style={styles.input} type="text" id="insCompany" name="insCompany" placeholder="Company" />
                <input style={styles.input} type="text" id="insPolicy" name="insPolicy" placeholder="Policy Number" />
                <input style={styles.input} type="text" id="insLiability" name="insLiability" placeholder="Liability Coverage Amount" />
                <input style={styles.input} type="text" id="insProp" name="insProp" placeholder="Property Damage Coverage Amount" />

                <hr style={styles.hr} />

                <span style={styles.buttonSection}>
                <button type="button" onClick={this.appCreateResident} style={{border: '1px solid black'}} className="btn btn-success">Submit</button>
                <button type="button" onClick={this.props.cancelCreate} style={{border: '1px solid black'}} className="btn btn-danger">Cancel</button>
                </span>
            </div>
        </div>
        </>
    )
}}

const styles = {
    app: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: '2vh 0 0 0'
    },
    input: {
        width: '30vw',
        margin: '0 0 3vh 0',
        border: '1px dotted black'
    },
    hr: {
        color: 'black',
        backgroundColor: 'black',
        borderColor: 'black',
        height: '1px',
        width: '95%'
    },
    dropdown: {
        margin: '0 0 3vh 0'
    },
    buttonSection: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: '0 0 3vh 0'
    }
}

export default NewResident