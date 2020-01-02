import React, { Component } from 'react';
class SignatureFoodComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="title">
                    <h1> Our Signature Dishes</h1>
                </div>
                <div className="blog">

                    <div className="container">
                        <div className="row">
                          {this.props.children}
                                
                        </div>
                        <div className="row load_more_row">
                            <div className="col">
                                <div className="button load_more_button ml-auto mr-auto trans_200"><a href="/#">Load More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default SignatureFoodComponent;