import React, { Component } from 'react';
import HeaderContainer from './../../containers/HeaderContainer'
import Menu from './../menu/menu';

import SignatureFoodContainer from './../../containers/SignatureFoodContainer'
class HomeComponent extends Component {
    render() {
        return (
        <React.Fragment >
            <HeaderContainer> </HeaderContainer>
            <div className="home">
                    <div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/about.jpg" data-speed="0.8"></div>
                    <div className="home_container">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="home_content text-center">
                                        <div className="home_subtitle page_subtitle">Max Restautant</div>
                                        <div className="home_title">
                                            <h1>Home</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Menu> </Menu>
            <SignatureFoodContainer> </SignatureFoodContainer>
        </React.Fragment>

        );
    }

}

export default HomeComponent;