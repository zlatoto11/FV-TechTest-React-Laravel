import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./UserInputForm.css";
import axios from "axios";

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function nameValidation(input) {
    var lettersRegEx = /^[A-Za-z]+$/;
    if (input.match(lettersRegEx) && input != "") {
        return true;
    } else {
        return false;
    }
}

function phoneNumberValidation(phoneNumber) {
    var phoneRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (phoneNumber.match(phoneRegEx)) {
        return true;
    } else {
        return false;
    }
}

export default class UserInputForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            mobileNumber: "",
            gender: "",
            dateOfBirth: "",
            comments: ""
        };
    }

    onSubmit(e) {
        e.preventDefault();
        //Name Validation
        if (!nameValidation(this.state.fname)) {
            alert("First Name is Required. It cannot be empty or use symbols.");
            return;
        }
        if (!nameValidation(this.state.lname)) {
            alert("Last Name is Required.  It cannot be empty or use symbols.");
            return;
        }
        //Email Validation, already pre-checked.
        if (!emailIsValid(this.state.email)) {
            alert("Email Address is not valid. It cannot be empty.");
            return;
        }

        //Phone Validation.
        if (!phoneNumberValidation(this.state.mobileNumber)) {
            alert("Phone Number is not valid. Please only use digits.");
            return;
        }

        const user = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            mobileNumber: this.state.mobileNumber,
            gender: this.state.gender,
            dateOfBirth: this.state.dateOfBirth,
            comments: this.state.comments
        };
        console.log(user);
        axios
            .post("http://127.0.0.1:8000/user/add", user)
            .then(res => console.log(res.data));
    }

    render() {
        return (
            <div className="App">
                <p>Input User</p>
                <div className="UserInputForm__Form">
                    <form onSubmit={this.onSubmit}>
                        <div className="accordion" id="accordionExample">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h2 className="mb-0">
                                        <button
                                            className="btn btn-link btn-block text-left"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            Step 1: Your Details
                                        </button>
                                    </h2>
                                </div>
                                <div
                                    id="collapseOne"
                                    className="collapse show"
                                    aria-labelledby="headingOne"
                                    data-parent="#accordionExample"
                                >
                                    <div className="card-body">
                                        <label>First Name</label>
                                        <input
                                            type="text"
                                            id="fname"
                                            name="firstname"
                                            onChange={e =>
                                                this.setState({
                                                    fname: e.target.value
                                                })
                                            }
                                            placeholder="Your first name..."
                                        />
                                        <label>Surname</label>
                                        <input
                                            type="text"
                                            id="lname"
                                            name="lastname"
                                            onChange={e =>
                                                this.setState({
                                                    lname: e.target.value
                                                })
                                            }
                                            placeholder="Your last name..."
                                        />

                                        <label>Email Address</label>
                                        <input
                                            type="email"
                                            id="eAddress"
                                            name="emailAddress"
                                            onChange={e =>
                                                this.setState({
                                                    email: e.target.value
                                                })
                                            }
                                            placeholder="Your E-mail Address.."
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h2 className="mb-0">
                                        <button
                                            className="btn btn-link btn-block text-left collapsed"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            Step 2: More Comments
                                        </button>
                                    </h2>
                                </div>
                                <div
                                    id="collapseTwo"
                                    className="collapse"
                                    aria-labelledby="headingTwo"
                                    data-parent="#accordionExample"
                                >
                                    <div className="card-body">
                                        <label>Telephone Number</label>
                                        <input
                                            type="tel"
                                            id="mNumber"
                                            name="mobileNumber"
                                            onChange={e =>
                                                this.setState({
                                                    mobileNumber: e.target.value
                                                })
                                            }
                                            placeholder="Your Mobile Number..."
                                        />
                                        <label>Gender</label>
                                        <input
                                            id="uGender"
                                            name="userGender"
                                            onChange={e =>
                                                this.setState({
                                                    gender: e.target.value
                                                })
                                            }
                                            placeholder="Your Gender..."
                                        />
                                        <label>Date Of Birth</label>
                                        <input
                                            type="date"
                                            id="dOBirth"
                                            name="dateOfBirth"
                                            onChange={e =>
                                                this.setState({
                                                    dateOfBirth: e.target.value
                                                })
                                            }
                                            placeholder="Your Date of Birth..."
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h2 className="mb-0">
                                        <button
                                            className="btn btn-link btn-block text-left collapsed"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            Step 3: Final Comments
                                        </button>
                                    </h2>
                                </div>
                                <div
                                    id="collapseThree"
                                    className="collapse"
                                    aria-labelledby="headingThree"
                                    data-parent="#accordionExample"
                                >
                                    <div className="card-body">
                                        <label>Comments</label>
                                        <textarea
                                            id="uComments"
                                            name="userComments"
                                            onChange={e =>
                                                this.setState({
                                                    comments: e.target.value
                                                })
                                            }
                                            placeholder="Please write any comments in this field."
                                        ></textarea>
                                        <input type="submit" value="Submit" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
// •	First name (required)
// •	Last name (required)
// •	E-mail address (required, must be a valid email address, e.g. name@example.com)
// •	Mobile number (required, must be a valid UK mobile number, e.g. 07000000000)
// •	Gender (required)
// •	Date of birth (required, must follow the pattern of dd/mm/yyyy, e.g. 02/11/1990)
// •	Comments (can be empty)

//export default UserInputForm;

if (document.getElementById("mainPage__User__Input")) {
    ReactDOM.render(
        <UserInputForm />,
        document.getElementById("mainPage__User__Input")
    );
}
