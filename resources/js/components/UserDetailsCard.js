import "../../css/UserInputForm.css";
import React, { Component } from "react";

export default class UserDetailsCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="formFirstName">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="formFirstName"
                                    onChange={e =>
                                        this.props.setStateValue(
                                            "fname",
                                            e.target.value
                                        )
                                    }
                                ></input>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="formSurname">Surname</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="formSurname"
                                    onChange={e =>
                                        this.props.setStateValue(
                                            "lname",
                                            e.target.value
                                        )
                                    }
                                ></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="formEmail">
                                    Email Address:
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="formEmail"
                                    onChange={e =>
                                        this.props.setStateValue(
                                            "email",
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
                                    data-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
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
