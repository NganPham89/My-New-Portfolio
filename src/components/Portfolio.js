import React, { useState } from "react";
import "./Header.css"

import ImgSoccer from "./assets/project-soccer.png";
import ImgHomeHub from "./assets/project-homehub.png";
import ImgBackend from "./assets/project-backend.jpg";
import ImgBlog from "./assets/project-blog.jpg";
import ImgCLI from "./assets/project-CLI.jpg";
import ImgJAAN from "./assets/project-event-manager.png";
import ImgEcomFront from "./assets/project-ecommerce-frontend.jpg"
import ImgEcomDash from "./assets/project-ecommerce-dashboard.jpg"



const projectsList = [
    {
        id: 1,
        name: "JAAN Event Manager (React)",
        github: "https://github.com/JaminHLO/jaan-event-manager",
        url: "https://sports-connect-e11a3bbe276b.herokuapp.com/",
        img: ImgJAAN,
        description: "A club and event management site where user can host, find, or join sporting events in their areas. Built with React, MongoDB, and Tailwind"
    },
    {
        id: 2,
        name: "E-Commerce Front End (Next.js 14)",
        github: "https://github.com/NganPham89/rose-shop-frontend",
        url: "https://rose-shop-frontend.vercel.app/",
        img: ImgEcomFront,
        description: "A store front to go along with an E-Commerce dashboard, built with Next.js 14, React, MySQL, and Tailwind."
    },
    {
        id: 3,
        name: "E-Commerce Dashboard (Next.js 13)",
        github: "https://github.com/NganPham89/rose-shop-admin",
        url: "https://rose-shop-admin.vercel.app/",
        img: ImgEcomDash,
        description: "A CMS where shop owners can use to create and manage their store fronts. Built with Next.js 13, React, MySQL, and Tailwind."
    },
    {
        id: 4,
        name: "HomeHub (Handlebars)",
        github: "https://github.com/Anabel-Espinoza/HomeHub",
        url: "https://home-hub-management.herokuapp.com/",
        img: ImgHomeHub,
        description: "A home rental management system in which a homeowner has various tools to manage their properties and stay in touch with their tenants. Built with Handlebars, MySQL, and Bootstrap."
    },
    {
        id: 5,
        name: "Soccer Betting Minigame",
        github: "https://github.com/NganPham89/Soccer-Betting-Mini-Game",
        url: "https://nganpham89.github.io/Soccer-Betting-Mini-Game/",
        img: ImgSoccer,
        description: "A fun simple game where the user can bet against a soccer betting site of an upcoming soccer match."
    },
    {
        id: 6,
        name: "Social Media Backend",
        github: "https://github.com/NganPham89/Social-Media-Backend",
        url: "https://drive.google.com/file/d/1g9E9XEskw892D4jTHvWod0xJI46kedqt/view",
        img: ImgBackend,
        description: "A functional simple backend for a social media site, including functionalities such as making posts, adding friends, sharing thoughts."
    },
    {
        id: 7,
        name: "Pokemon Blog",
        github: "https://github.com/NganPham89/Pokemon-Blog",
        url: "https://serene-savannah-81047.herokuapp.com/",
        img: ImgBlog,
        description: "A simple blog site where the user can create posts about pokemon-related contents and sharing their thoughts with people of similar interests."
    },
    {
        id: 8,
        name: "Employee Management System",
        github: "https://github.com/NganPham89/Employee-Info-Management",
        url: "https://drive.google.com/file/d/1y7oAtQ_GyohJ_CHBhxgDY1fetrudCTNS/view",
        img: ImgCLI,
        description: "A basic system where the user can manage employee roles, salaries, positions, etc."
    },
]

const Portfolio = () => {

    const [projects, setProjects] = useState(projectsList)

    function toggleDisplay(event) {
        const newProjectsList = []
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].id === parseInt(event.target.id)) {

                newProjectsList.push({ ...projects[i], display: true })
            } else {
                newProjectsList.push({ ...projects[i], display: false })
            }
        }
        setProjects(newProjectsList);
    }

    return (
        <div className="post-body d-flex-row">
            <h2 className="font-os font-pink d-flex justify-content-center m-4">This is a collection of my most notable projects.</h2>
            <div className="d-lg-flex justify-content-around flex-wrap">
                {projects.map((project) => {
                    return (
                        <div key={project.img} className="d-flex-row my-5 mx-3 justify-content-center align-items-center">
                            <div className="d-flex justify-content-center align-items-center">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="nav-active"
                                >
                                    <h3
                                        className="font-os"
                                    >{project.name}</h3>
                                </a>
                                <div
                                    id={project.id}
                                    className="mx-3 font-pink font-medium"
                                    onClick={event => toggleDisplay(event)}
                                    value={project.id}
                                >▼</div>
                            </div>

                            {project.display && 
                            <div
                                className="d-flex justify-content-center align-items-center"
                                style={{width: "450px"}}
                            >
                                <p
                                    className="font-white font-os mx-3 font-medium text-wrap"
                                >{project.description}</p>
                            </div>}
                            <div className="d-flex justify-content-center align-items-center">
                                <a href={project.url} target="_blank" rel="noreferrer">
                                    <img src={project.img} alt={project.name} width={450} height={300} className="border-blue" />
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio;