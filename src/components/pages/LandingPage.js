import React from 'react'
import { useNavigate } from "react-router-dom";

import '../../App.css'
import BackgroundImage from '../../assets/images/landing-page.jpg'

export const LandingPage = () => {
    const navigate = useNavigate();

    const handleLoginpage = (event) => {
        navigate("/login");
      };

    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">Green Energy Cloud</h1>
            <div className="buttons text-center">
                <img src={BackgroundImage} alt="bg" width="90%" />
                    <button className="primary-button" style={buttonStyle} onClick={handleLoginpage}>log in</button>
                {/* <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link> */}
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

const buttonStyle = {
    display: "block",
    left: "42em",
    position: "relative",
    top: "5em",
    textTransform: "uppercase",
    width: "10em",
    padding: "10px",
    color: "white",
    background: "teal"
}