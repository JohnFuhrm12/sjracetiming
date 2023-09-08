import '../styles/contact.css';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from "react-router-dom";

function Contact() {
    // Contact Validation FormSpree
    const [state, handleSubmit] = useForm("mjvqrlnb");
    const navigate = useNavigate();

    if (state.succeeded) {
        navigate('/success');
    }; 

    return (
        <>
            <div id='contactBlockHome'>
                <div id='contactLogoFormHomeWrapper'>
                    <img id='logoContactBlock' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693969389/SJ%20Race%20Timing/g1jzajm3pzy0uzfjyvca.webp' alt='South Jersey Race Timing'/>
                    <div id='contactFormBlockHome'>
                        <h1 id='contactHomeTitle'>CONTACT US</h1>
                        <form id='contactFormHome' onSubmit={handleSubmit}>
                            <ValidationError prefix="Email" field="email" errors={state.errors}/>
                            <input type='text' name='name' className='contactInputHome' placeholder='Full Name' required/>
                            <select className='contactSelectHome' name='contactType' defaultValue={'none'} aria-labelledby="contactType" required>
                                <option value='none' disabled hidden>Choose from Dropdown</option>
                                <option value="Race Director">Race Director</option>
                                <option value="Runner">Runner</option>
                                <option value="N/A">N/A</option>
                            </select>
                            <input type='text' name='email' className='contactInputHome' placeholder='youremail@gmail.com' required/>
                            <input type='text' name='phone' className='contactInputHome' placeholder='Phone Number' required/>
                            <textarea name='message' className='contactTextAreaHome' placeholder='Send us a Message!'/>
                            <button id='contactFormHomeButton' className='button' type='submit'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;