import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./UserInputForm.css";
import axios from "axios";
import { validateAll } from "../utils/validationFunctions";
import UserDetailsCard from "./UserDetailsCard";
import UserContactDetailsCard from "./UserContactDetailsCard";
import UserCommentsCard from "./UserCommentsCard";

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
            dateOfBirthDD: "",
            dateOfBirthMM: "",
            dateOfBirthYYYY: "",
            comments: ""
        };
    }

    setStateValue = (key, value) => {
        this.setState({ [key]: value });
    };

    selectGender = e => {
        console.log(e);
        this.setState({
            gender: this.chosenGender.current.value
        });
        console.log(this.chosenGender.current.value);
    };

    onSubmit = e => {
        e.preventDefault();

        const {
            fname,
            lname,
            email,
            mobileNumber,
            gender,
            dateOfBirthDD,
            dateOfBirthMM,
            dateOfBirthYYYY,
            comments
        } = this.state;

        //Validations
        if (!validateAll(this.state)) return;

        let finalDate =
            dateOfBirthYYYY + "-" + dateOfBirthMM + "-" + dateOfBirthDD;

        this.setState({
            dateOfBirth: finalDate
        });

        //Automatically sets key to the variable name and value to variable value.
        //if value not provided, e.g. dont need to do fname: fname,
        const user = {
            fname,
            lname,
            email,
            mobileNumber,
            gender,
            dateOfBirth: finalDate,
            comments
        };
        axios
            .post("http://127.0.0.1:8000/user/add", user)
            .then(res => console.log(res.data));

        alert("Information Sent.");
    };

    render() {
        return (
            <div className="App d-flex align-items-center justify-content-center">
                <div className="UserInputForm__Form">
                    <form onSubmit={this.onSubmit} noValidate>
                        <div className="accordion" id="accordionExample">
                            <UserDetailsCard
                                setStateValue={this.setStateValue}
                            />
                            <UserContactDetailsCard
                                setStateValue={this.setStateValue}
                            />
                            <UserCommentsCard
                                setStateValue={this.setStateValue}
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

if (document.getElementById("mainPage__User__Input")) {
    ReactDOM.render(
        <UserInputForm />,
        document.getElementById("mainPage__User__Input")
    );
}
