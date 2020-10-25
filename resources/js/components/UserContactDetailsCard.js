import "./UserInputForm.css";
import React, { Component } from "react";

export default class UserContactDetailsCard extends Component {
    constructor(props) {
        super(props);
        this.chosenGender = React.createRef();
    }

    selectGender = e => {
        this.props.setStateValue("gender", this.chosenGender.current.value);
    };

    render() {
        return (
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
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="formTelephoneNumber">
                                    Telephone Number
                                </label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="formTelephoneNumber"
                                    onChange={e =>
                                        this.props.setStateValue(
                                            "mobileNumber",
                                            e.target.value
                                        )
                                    }
                                ></input>
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="formGenderChoice">Gender</label>
                                <select
                                    id="formGenderChoice"
                                    className="form-control genderChoice"
                                    onChange={this.selectGender}
                                    ref={this.chosenGender}
                                >
                                    <option value="" disabled selected>
                                        Select Gender
                                    </option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <h6>Date Of Birth</h6>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-1">
                                {/* <label htmlFor="formDOB">Date of Birth</label> */}
                                <input
                                    type="text"
                                    className="form-control dOBInputs"
                                    id="formDOB"
                                    onChange={e =>
                                        this.props.setStateValue(
                                            "dateOfBirthDD",
                                            e.target.value
                                        )
                                    }
                                ></input>
                            </div>
                            <div className="form-group col-md-1">
                                <input
                                    type="text"
                                    className="form-control "
                                    id="formDOBMM"
                                    onChange={e =>
                                        this.props.setStateValue(
                                            "dateOfBirthMM",
                                            e.target.value
                                        )
                                    }
                                ></input>
                            </div>
                            <div className="form-group col-md-1">
                                <input
                                    type="text"
                                    className="form-control y"
                                    id="formDOBYYYY"
                                    onChange={e =>
                                        this.props.setStateValue(
                                            "dateOfBirthYYYY",
                                            e.target.value
                                        )
                                    }
                                ></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-2 align-self-end ml-auto text-right">
                                <button
                                    className="btn nextButton btn-primary"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    Next {">"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
