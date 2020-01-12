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
    { value: "NJ", label: "New Jersey" }
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
        console.log(`starting function`)
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
        console.log(`DATA CREATED`);
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
                {/* <select style={styles.dropdown} id="altMailingState" name="altMailingState" value="New Jersey">
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select> */}
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