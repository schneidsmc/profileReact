

const Projects = () => {
    return (
        <div className='my-24 md:px-14 py-40 px-4 max-w-screen-2xl mx-auto'>
            <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
                <div className='lg:w-1/4'>
                    <h3 className='text-3xl text-primary font-bold lg:w-1/2 mb-3'>A little more about me!</h3>
                    <p className='text-base text-tartiary'>a little more about me...</p>
                </div>
                {/* cards */}
                <div className='w-full lg:w-3/4'>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
                        <div className='flex flex-col items-center justify-center bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 
                        hover:-translate-y-4 transition-all duration-300 cursor-pointer' >
                            <img src='/hotdog-solid.svg' alt="hotdog"  className='w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-24'/>
                            <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>
                                Weather Dashboard
                            </h5>
                        </div>
                        <div className='flex flex-col items-center justify-center bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 
                        hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16' >
                            <img src='/hotdog-solid.svg' alt="hotdog"  className='w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-24'/>
                            <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>
                                Weather Dashboard
                            </h5>
                        </div>
                        <div className='flex flex-col items-center justify-center bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 
                        hover:-translate-y-4 transition-all duration-300 cursor-pointer' >
                            <img src='/hotdog-solid.svg' alt="hotdog"  className='w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-24'/>
                            <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>
                                Weather Dashboard
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;