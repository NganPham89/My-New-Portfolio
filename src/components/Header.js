import React from "react";

const Header = ({ currentPage, handlePageChange }) => {
    return (
        <div className="border border-2 border-primary">
            This is from Header.
            <h1>N.PHAM</h1>
            <p>Full-Stack Web Developer</p>
            <div>
                <ul>
                    <li><a href="#About"
                        onClick={() => handlePageChange("About")}
                        className={currentPage === "About" ? "btn btn-success" : "btn btn-danger"}>About</a></li>
                    <li><a href="#Portfolio"
                        onClick={() => handlePageChange("Portfolio")}
                        className={currentPage === "Portfolio" ? "btn btn-success" : "btn btn-danger"}>Portfolio</a></li>
                    <li><a href="#Resume"
                        onClick={() => handlePageChange("Resume")}
                        className={currentPage === "Resume" ? "btn btn-success" : "btn btn-danger"}>Resume</a></li>
                    <li><a href="#Contact"
                        onClick={() => handlePageChange("Contact")}
                        className={currentPage === "Contact" ? "btn btn-success" : "btn btn-danger"}>Contact</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Header;