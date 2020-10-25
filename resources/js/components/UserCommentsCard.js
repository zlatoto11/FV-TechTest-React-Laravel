import "./UserInputForm.css";
import React, { Component } from "react";

export default class UserCommentsCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
                        <div className="form-row">
                            <div className="form-group col-md 8">
                                <label htmlFor="formComments">Comments</label>
                                <input
                                    type="text"
                                    className="form-control commentForm"
                                    id="formComments"
                                    onChange={e =>
                                        this.props.setStateValue(
                                            "comments",
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
                                    type="submit"
                                    value="Submit"
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
