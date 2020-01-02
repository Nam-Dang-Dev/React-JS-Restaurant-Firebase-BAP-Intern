import React, { Component } from 'react'

class contactComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            LastName: "",
            phone: "",
            email: "",
            address: "",
            comment: ""
        }
    }

    render() {
        return (
            <React.Fragment>

                <div className="row contact">
                    <div>
                        <div className="form-group">
                            <label className="control-label">First Name:</label>
                            <div className="">
                                <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname" onChange={(event) => {
                                    this.setState({ firstName: event.target.value });
                                }} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Last Name:</label>
                            <div className="">
                                <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname"  onChange={(event) => {
                                    this.setState({ LastName: event.target.value });
                                }}  />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Phone number:</label>
                            <div className="">
                                <input type="number" className="form-control" placeholder="Enter phone number"  onChange={(event) => {
                                    this.setState({ phone: event.target.value });
                                }}  />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label" >Email:</label>
                            <div className="">
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"  onChange={(event) => {
                                    this.setState({ email: event.target.value });
                                }}  />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label" >Address:</label>
                            <div className="">
                                <input type="text" className="form-control" placeholder="Enter address"  onChange={(event) => {
                                    this.setState({ address: event.target.value });
                                }}  />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Comment:</label>
                            <div className="">
                                <textarea className="form-control" rows="5" id="comment"></textarea>
                            </div>
                        </div>

                    </div>
                </div>

            </React.Fragment>
        );
    }

}





export default contactComponent;


