import React, { Component } from 'react'
import HeaderContainer from './../../containers/HeaderContainer'
class ProfileComponent extends Component {

    render() {

        return (
            <React.Fragment>
                <HeaderContainer />
                <div className="space"></div>
                <div className="container">
                    <div className="row">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name Food</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Excute</th>
                                    </tr>
                                </thead>
                                <tbody>{this.props.children}</tbody>
                            </table>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}



export default ProfileComponent;