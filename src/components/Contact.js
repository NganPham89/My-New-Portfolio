import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [messageErr, setMessageErr] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        event.preventDefault();

        handleShow();
        setName("");
        setEmail("");
        setMessage("");
    }

    const nameHandler = (event) => {
        const inputName = event.target.value;
        if (inputName.trim().length === 0 || name === "") {
            setNameErr(true);
        } else {
            setNameErr(false);
        }
        setName(event.target.value);
    }

    const emailHandler = (event) => {
        const inputEmail = event.target.value.trim();
        if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputEmail) || email !== "") {
            setEmailErr(false);
        } else {
            setEmailErr(true);
        }
        console.log(emailErr)
        setEmail(event.target.value);
    }

    const messageHandler = (event) => {
        const inputMessage = event.target.value;
        if (inputMessage.trim().length < 10 || message === "") {
            setMessageErr(true);
        } else {
            setMessageErr(false);
        }
        setMessage(inputMessage)
    }

    const emptyFieldCheck = () => {
        if (nameErr || emailErr || messageErr) {
            return <button className="btn btn-warning" disabled={true}>Submit</button>;
        } else {
            return <button className="btn btn-info" onClick={handleSubmit}>Submit</button>;
        }
    }

    return (
        <div className="border border-2 border-danger">
            This is from Contact.
            <h2>Contact Me</h2>
            <form>
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    name="name"
                    onChange={nameHandler}
                    onFocus={nameHandler}
                ></input>
                {nameErr ? <p>Please enter your name (required)</p> : null}
                <br />
                <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    name="email"
                    onChange={emailHandler}
                    onFocus={emailHandler}
                ></input>
                {emailErr ? <p>Please enter a valid email (required)</p> : null}
                <br />
                <input
                    type="text"
                    placeholder="Type Your Message"
                    value={message}
                    name="text"
                    onChange={messageHandler}
                    onFocus={messageHandler}
                ></input>
                <br />
                {messageErr ? <p>Please enter a short message (Minimum 10 characters required)</p> : null}
                {emptyFieldCheck()}
                {/* {submitBtn ? <button className="btn btn-info">Submit</button> : <button className="btn btn-warning" disabled={true}>Submit</button>} */}
            </form>
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Body>Your message has been sent.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}

export default Contact;