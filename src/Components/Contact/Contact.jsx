import './Contact.css'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { validateEmail } from '../../Utils/EmailValidator.js'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setTimeout(() =>
                alert('Please Enter A Valid Email')
                , 500)
            return;
        }

        const serviceId = 'service_7z3rq0t';
        const templateId = 'template_cq7z9hc';
        const publicKey = 'B2PCc5s-Jybuu2Tck';

        const templateParams = {
            from_name: name,
            subject: subject,
            message: message,
            email: email,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                alert(`Thank you for your message ${name}!  We will get back to you soon!`);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }
    return (
        <main id='Contact' className='contact-main grid grid-cols-2 justify-items-end items-center w-full h-auto'>
            <header className='contact-title my-5 text-3xl col-start-1 p-5 mr-5'>Contact Me</header>
            <form onSubmit={handleSubmit} className='contact-form col-start-1 flex flex-col items-center w-[90%] h-auto gap-1 mr-5 rounded-2xl'>
                <article className='form-container flex flex-col items-center gap-1 w-[90%] h-[90%] pb-5 pt-10'>
                    <input
                        className='form-input w-full'
                        type='text'
                        value={name}
                        placeholder='Your Name'
                        onChange={(e) => setName(e.target.value)}></input>
                    <input
                        className='form-input w-full'
                        type='text'
                        value={email}
                        placeholder='Your Email'
                        onChange={(e) => setEmail(e.target.value)}></input>
                    <input
                        className='form-input w-full'
                        type='text'
                        value={subject}
                        placeholder='Subject'
                        onChange={(e) => setSubject(e.target.value)}></input>
                    <textarea
                        className='form-input w-full'
                        type='text'
                        value={message}
                        rows='5'
                        cols='10'
                        placeholder='Message'
                        onChange={(e) => setMessage(e.target.value)}></textarea>
                    <article className='w-full'>
                        <button type='submit' className='submit-btn flex justify-start w-fit px-1'>Submit</button>
                    </article>
                </article>

            </form>
        </main>
    )
}

export default Contact