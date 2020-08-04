import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/give-classes.svg';


import studyIcon from '../../assets/images/icons/study.svg';
import givenClassesIcon from '../../assets/images/icons/give-classes.svg';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img 
                    src={landingImg}
                    alt="Estude online."
                    className="hero-image"/>

                <div className="buttons-container">
                    <a href="" className="study">

                    </a>
                </div>
            </div>
        </div>
    );
}

export default Landing;