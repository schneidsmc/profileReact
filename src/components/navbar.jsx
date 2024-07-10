import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ello from '../assets/ello.svg';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPage = useLocation().pathname;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { link: 'About', path: '/About' },
        { link: 'Blog', path: '/Blog' },
        { link: 'Projects', path: '/Projects' },
        { link: 'Contact', path: '/Contact' }
    ];

    return (
        <>
            <nav className='bg-white md:px-414 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0'>
                <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                    <Link to="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
                        <img src={ello} alt="hello" className="w-10 inline block items-center rounded-[35px] hover:bg-tartiary" />
                    </Link>
                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({ link, path }) => (
                            <li key={link}>
                                <Link
                                    to={path}
                                    className={`text-primary hover:text-gray-700 ${
                                        currentPage === path ? 'font-bold' : ''
                                    }`}
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className='md:flex items-center space-x-12 hidden'>
                        <a href="/MEGAN SCHNEIDER _ Resume (1).pdf" target="_blank" rel="noopener noreferrer" className='bg-tartiary py-2 px-4 rounded hover:text-white'>Resume</a>
                    </div>
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-gray-700 focus:outline-none'>
                            {isMenuOpen ? <FaTimes className='w-6 h-6' /> : <FaBars className='w-6 h-6' />}
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`md:hidden fixed top-16 right-0 left-0 bg-gray-100 z-50 transform transition-transform ease-in-out ${
                isMenuOpen ? 'translate-y-0' : '-translate-y-full'
            }`}>
                <div className='p-4 space-y-4'>
                    {navItems.map(({ link, path }) => (
                        <Link
                            key={link}
                            to={path}
                            className={`block text-primary font-medium hover:text-gray-700 ${
                                currentPage === path ? 'font-bold' : ''
                            }`}
                            onClick={toggleMenu}
                        >
                            {link}
                        </Link>
                    ))}
                    <button className='bg-tartiary py-2 px-4 rounded text-white w-full' onClick={toggleMenu}>
                        Close Menu
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
