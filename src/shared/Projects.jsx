const Projects = () => {
    return (
        <div className='my-24 md:px-14 py-40 px-4 max-w-screen-2xl mx-auto'>
            <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
                <div className='lg:w-1/4'>
                    <h3 className='text-3xl text-primary font-bold lg:w-1/2 mb-3'>Projects</h3>
                    <p className='text-base text-tartiary'>I am proud of the work I have created over the past six months. During this bootcamp, I have fully invested all my time and energy into creating content that represents my skills and will set me up for future success. Check it out!</p>
                </div>
                {/* cards */}
                <div className='w-full lg:w-3/4'>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
                    <div>
                             <a href="https://journey-jot-decc05f3600a.herokuapp.com/"target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl 
                        hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                            <img src='/journeyJot.png' alt="JourneyJot"  className='p-6'/>
                            <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>
                                Journey Jot
                                <hr className="py-10"/>
                                <a href="https://github.com/Umbelth94/JourneyJot"target="_blank" rel="noopener noreferrer" ><img src="/github.svg" alt="gitIcon" className="w-10 inline block items-center rounded-[35px] hover:bg-tartiary" /></a>
                            </h5>
                            </a>
                        </div>
                        <div>
                             <a href="https://schneidsmc.github.io/code-quiz4/"target="_blank" rel="noopener noreferrer" 
                             className="flex flex-col items-center justify-center bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 
                        hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
                            <img src='/codeQuiz.png' alt="codeQuiz"  className=''/>
                            <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>
                                Code Quiz
                                <hr className="py-10"/>
                                <a href="https://github.com/schneidsmc/code-quiz4"target="_blank" rel="noopener noreferrer" ><img src="/github.svg" alt="gitIcon" className="w-10 inline block items-center rounded-[35px] hover:bg-tartiary" /></a>
                            </h5>
                            </a>
                        </div>
                        <div>
                             <a href="https://schneidsmc.github.io/weather-dashboard06/"target="_blank" rel="noopener noreferrer" 
                             className="flex flex-col items-center justify-center bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 
                        hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                            <img src='/weatherDash.png' alt="weather"  className=''/>
                            <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>
                                Weather Dashboard
                                <hr className="py-10"/>
                                <a href="https://github.com/schneidsmc/weather-dashboard06"target="_blank" rel="noopener noreferrer" ><img src="/github.svg" alt="gitIcon" className="w-10 inline block items-center rounded-[35px] hover:bg-tartiary" /></a>
                            </h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
