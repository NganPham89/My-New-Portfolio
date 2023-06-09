import React from "react";
import ProfileImage from "./assets/profile.jpg"

const About = () => {
    return (
        <div className="border border-2 border-sucess">
            This is from About.
            <div>
                <h2>About Me</h2>
                <img src={ProfileImage} width={200} alt="my facial profile" />
                <p>Born in 1989, in Saigon, Viet Nam. I'm a chemist who's trying to find a new path in life through webdev. I believe
                    becoming a full stack developer will bring a more joyful experience than going the way of Breaking Bad.
                </p>
            </div>
        </div>
    )
}

export default About;