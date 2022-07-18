import React, { useState } from "react";
import github from '../../assets/images/git-hub.png'
import linkedin from '../../assets/images/linkedin.png'
import laptop from '../../assets/images/laptop-code-solid-color-sm.png'
import mail from '../../assets/images/envelope-solid-color.png'
// import { validateEmail } from '../../utils/helpers';

function Contact() {
    //     const [errorMessage, setErrorMessage] = useState('');
    //     const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    //     const { name, email, message } = formState;

    //     function handleChange(e) {
    //         if (e.target.name === 'email') {
    //             const isValid = validateEmail(e.target.value);
    //             console.log(isValid)
    //             //isvalid conditional
    //             if (!isValid) {
    //                 setErrorMessage('Your email is invalid');
    //             } else {
    //                 setErrorMessage('')
    //             }
    //         } else {
    //             if (!e.target.value.length) {
    //                 setErrorMessage(`${e.target.name} is required.`);
    //             } else {
    //                 setErrorMessage('');
    //             }
    //         }


    //         console.log('errorMessage', errorMessage);

    //         if (!errorMessage) {
    //             setFormState({ ...formState, [e.target.name]: e.target.value })

    //         }

    //     }

    //     function handleSubmit(e) {
    //         e.preventDefault();
    //         console.log(formState);
    //     }

    return (
        <section class="container form-div col-lg-6 col-md-10">

            <h2>Contact me</h2>
            <div class="contact">
                <div class="rmg-block">
                    <a href='mailto:robyn@sitereworks.com' target='_blank' rel='noreferrer'><img src={mail} class="icon" height="100px" alt='' /></a>
                    <br />

                    <a href='mailto:robyn@sitereworks.com' target='_blank' rel='noreferrer'>robyn@sitereworks.com</a>
                </div>

                <br />
                <div class="rmg-block">
                    <a href="https://github.com/robyng" target='_blank' rel="noreferrer" ><img src={github} class="icon" height="100px" alt='' /></a>
                    <br />
                    Github
                </div>
                <br />
                <div class="rmg-block">
                    <a href="https://www.linkedin.com/in/robyn-graham-b067aa97/" target='_blank' rel="noreferrer"><img src={linkedin} class="icon" height="100px" alt='' /></a>
                    <br />
                    Linkedin
                </div>
                <br />
                <div className="rmg-block">
                    <a href="https://www.sitereworks.com/" target='_blank' rel="noreferrer"><img src={laptop} class="icon" target='_blank' height="100px" alt='' /></a>
                    <br />
                    Consulting
                </div>
            </div>


            {/* <form id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label> <br />
                    <input type="text" className="form-control" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label><br />
                    <input type="email" className="form-control" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label><br />
                    <textarea name="message" className="form-control" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <div className="row form-group">
                    <div className="col-10">
                        <button  className="btn btn-success" type="submit">Submit</button>

                    </div>


                </div>
            </form> */}
        </section>
    )
}

export default Contact;