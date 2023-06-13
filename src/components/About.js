import React from "react";
import ProfileImage from "./assets/profile.jpg"
import "./Header.css"

const About = () => {
    return (
        <div className="d-lg-flex align-items-center justify-content-center post-body">
                <div className="d-flex justify-content-center">
                    <img src={ProfileImage} width={300} alt="my facial profile" className="m-5 border-pink" />
                </div>
                <div className="d-flex-col align-items-center justify-content-center col-md-4">
                    <h2 className="font-os font-pink font-large mt-3 ms-3">Welcome to my portfolio.</h2>
                    <p className="font-white font-os mx-3 font-medium">Born in 1989, in Saigon, Viet Nam. I'm a former chemist who's trying to find a new path in life through webdev. I believe
                        becoming a full stack developer will bring a more joyful experience than going the way of Breaking Bad.
                        I specialize in Node.js, Sequelize/MongoDB, and React.
                    </p>
                </div>
            </div>
    )
}

export default About;