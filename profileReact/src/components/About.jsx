

const About = () => {
    return (
        <div className='md:px-14 p-4 max-w-s mx-auto'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/2'>
                    <img src='/carrot-solid.svg' alt="carrot" />
                </div>
                {/* content */}
                <div className='md:w-2/5'>
                    <h2 className='md:tex-5xl text-3xl font-bold text-primary mb-5 leading-normal'>Blah Blah <span className='text-tartiary'> Blah</span></h2>
                    <p className='text-tartiary text-lg ma-7'>Talkin bout a revolution</p>
                    <button className='btnPrimary'>ya roll bby</button>

                </div>
            </div>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
                <div className='md:w-1/2'>
                    <img src='/mountain-solid.svg' alt="mountain" />
                </div>
                {/* content */}
                <div className='md:w-2/5'>
                    <h2 className='md:tex-5xl text-3xl font-bold text-primary mb-5 leading-normal'>Blah Blah <span className='text-tartiary'> Blah</span></h2>
                    <p className='text-tartiary text-lg ma-7'>Talkin bout a revolution</p>
                    <button className='btnPrimary'>ya roll bby</button>

                </div>
            </div>


        </div>
    );
};

export default About;