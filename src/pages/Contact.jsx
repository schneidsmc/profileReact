import { useState } from 'react';

import { validateEmail } from '../utils/helpers';

function Contact() {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [name, setName] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue)
        }
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(!validateEmail(email)) {
            setErrorMessage(
                'Email is invalid'
            );
            return;
        }
        alert(`Thanks for Reaching Out ${name}! I will be in touch as soon as I can!`)

        setName('');
        setEmail('');
    };
    return (
        <div className='m-40 gradientBg rounded-xl rounded-br-[80px] rounded-tl-[80px] flex flex-col md:p-9 px-4 py-40'>
                <div className='flex flex-col justify-center items-center gap-10'>


                    {/* Banner Content */}
                    <div className='md:w-3/5'>
                        <h2 className='md:text-5xl text-4xl font-bold text-primary mb-6 leading-relaxed flex justify-center items-center'>Contact Me</h2>
                        <p className='flex flex-col justify-center items-center p-2'>Thank you for your interest!
                            <hr />
                             
                        </p>
                    <div>
                        <form className='form flex flex-col justify-center items-center ' onSubmit={handleFormSubmit}>
                            <input className='p-2 m-4 w-72 rounded-xl'
                            value={name}
                            name='name'
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Name'
                             />
                             <input className='p-2 m-4 w-72 rounded-xl'
                             value={email}
                             name='email'
                             onChange={handleInputChange}
                             type="email"
                             placeholder='Email' 
                             />
                             <button className='btnPrimary p-10 m-6' type='submit'>Submit</button>

                        </form>
                        {errorMessage && (
                            <div>
                                <p>{errorMessage}</p>
                            </div>
                        )}
                    </div>

                    </div>
                    
                </div>
            </div>
    );
}

export default Contact;