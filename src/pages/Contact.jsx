import { useState } from 'react';

import { validateEmail } from '../utils/helpers.js';
// import { Modal } from 'src/shared/Modal.jsx';

function Contact() {
    // const [showModal, setShowModal] = useState(false)
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
        <div className='m-24 md:m-24 lg:m-26 xl:m-20 2xl:m-40 gradientBg rounded-xl rounded-br-[80px] rounded-tl-[80px] flex flex-col md:p-9 px-4 py-8 md:py-16'>
                <div className='flex flex-col justify-center items-center gap-6'>

                    <div className='w-full md:w-3/5'>
                        <h2 className='text-4xl md:text-5xl font-bold text-primary mb-6 text-center'>Contact Me</h2>
                        <p className='text-center'>Thank you for your interest!
                            {/* <hr /> */}
                             
                        </p>
                    <div>
                        <form className='form flex flex-col items-center ' onSubmit={handleFormSubmit}>
                            <input className='inputField mb-4 w-full md:w-72 rounded-xl p-2'
                            value={name}
                            name='name'
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Name'
                             />
                             <input className='inputField mb-4 w-full md:w-72 rounded-xl p-2'
                             value={email}
                             name='email'
                             onChange={handleInputChange}
                             type="email"
                             placeholder='Email' 
                             />
                             <button className='btnPrimary p-10 m-6' type='submit'>Submit</button>
                             {/* <button onClick={() => setShowModal(true)}className='btnPrimary p-10 m-6' type='submit'>Submit</button> */}

                        </form>
                        {errorMessage && (
                            <div>
                                <p>{errorMessage}</p>
                            </div>
                        )}
                    </div>

                    </div>
                    
                </div>
                {/* {showModal && <Modal onClose={()=> setShowModal(false)}/>} */}
            </div>
    );
}

export default Contact;