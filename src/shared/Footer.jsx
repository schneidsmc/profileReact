const Footer = () => {
    return (
        <footer className='bg-celadon md:px-10 p-2 max-w-screen-2xl mx-auto mt-auto'>
            <div className='flex justify-center items-center'>
                <div>
                    <ul className='flex'>
                        <li className='footBtns'>
                            <a href="https://www.linkedin.com/in/meganschneider215/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </li>
                        <li className='footBtns'>
                            <a href="https://github.com/schneidsmc" target="_blank" rel="noopener noreferrer">Github</a>
                        </li>
                        <li className='footBtns'>
                            <a href="public/MEGAN SCHNEIDER _ Resume.pdf"target="_blank" rel="noopener noreferrer">Resume</a>
                        </li>
                    </ul>
                    <hr />
                </div>
            </div>
            <div>
            <p className='flex justify-center items-center font-semibold items-center'>schneidsmc@gmail.com | 920.948.1157</p>
            </div>
        </footer>
    );
};

export default Footer;

