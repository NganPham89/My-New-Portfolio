import React from "react";

const frontEndSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "React",
    "Bootstrap",
]

const backEndSkills = [
    "Node",
    "Express",
    "MySQL/Sequelize",
    "MongoDB/Mongoose",
    "GraphQL",
]

const Resume = () => {
    return (
        <div className="border border-2 border-info">
            This is from Resume.
            <h4>Download my resume <a href="#comingsoon">here</a></h4>
            <div>
                <h3>Front-end Skills</h3>
                <ul>
                    {frontEndSkills.map((skill) => {
                        return (<li>{skill}</li>)
                    })}
                </ul>
            </div>
            <div>
                <h3>Back-end Skills</h3>
                <ul>
                    {backEndSkills.map((skill) => {
                        return (<li>{skill}</li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Resume;