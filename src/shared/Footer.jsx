import ello from '../assets/ello.svg'

const Footer = () => {
    return (
        <div className='bg-celadon md:px-8 p-4 max-w-screen-2xl mx-auto'>
            <div className='my-4 flex flex-col md:flex-row gap-8'>
                <div className='md:w-1/2 space-y-8'>
                    <a href='/' className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
                        <img src={ ello } alt="logo" className='w-10 inline-block items-center' />
                    </a>
                    <p className=''>
                        Just a little info for the crowds
                    </p>
                </div>
                <div className='md:w-1/2 flex flex-col justify-end md:flex-row gap-8'>
                    <div className='space-y-4 mt-5'>
                        {/* <h4 className='text-xl font-semibold'>Links</h4> */}
                        <ul className='space-y-3 md:flex-row'>
                            <li className='flex justify-end'>
                                <a href="/" className='footBtns inline-block'>GitHub</a>
                            </li>
                            <li className='flex justify-end'>
                                <a href="/" className='footBtns inline-block'>LinkedIn</a>
                            </li>
                            <li className='flex justify-end'>
                                <a href="/" className='footBtns inline-block'>Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                
            </div>
            <div className='flex justify-center items-center'>
                    <p className='font-semibold items-center'>schneidsmc@gmail.com | 920.948.1157</p>
            </div>
            
        </div>
    );
};

export default Footer;