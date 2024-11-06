const About = () => {
    return (
        <div className='my-24 md:py-40 px-14 p-4 max-w-s mx-auto space-y-10 flex flex-col justify-center items-center'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/2'>
                    <img src='/torple.jpg' alt="carrot" className='w-full h-auto rounded-xl rounded-br-[80px] md:w-96 md:h-auto'/>
                </div>
                {/* content */}
                <div className='md:w-1/2'>
                    <h2 className='md:tex-5xl text-3xl font-bold text-primary mb-5 leading-normal'> This is
                    <span className='text-tartiary'> About Me</span></h2>
                    <p className='text-tartiary text-lg ma-7 mb-7'>Welcome to my portfolio! Im currently a software development apprentice with the Develop Carolina program and a Staff Technologist Intern at Booz Allen Hamilton.</p>

                    <p className='text-tartiary text-lg ma-7 mb-7'>At Booz Allen, I am gaining hands-on experience in Python, Agile methodologies, AWS, and AI, which is improving my technical foundation and is honing my ability to collaborate effectively within a team.</p>
                    <p className='text-tartiary text-lg ma-7 mb-7'>Before these positions, I completed an intensive Bootcamp with the UW Extension Program, where I developed a strong foundation in JavaScript, APIs, Node.js, OOP, Express.js, SQL, ORM, MVC, PWAs, React, and the MERN Stack.</p> 

                    <p className='text-tartiary text-lg ma-7 mb-7'>My journey has been fueled by a purpose-driven mindset and a passion for solving complex challenges through creative solutions. I am a lifelong learner, always eager to grow and gain insights from every experience.</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
                <div className='md:w-1/2'>
                    <img src='/lake.jpg' alt="mountain" className='w-full h-auto rounded-xl rounded-bl-[80px] rounded-tl-[80px] md:w-96 md:h-auto'/>
                </div>
                {/* content */}
                <div className='md:w-1/2'>
                    <h2 className='md:tex-5xl text-3xl font-bold text-primary mb-5 leading-normal'>This is a little bit MORE 
                    <hr /><span className='text-tartiary'> About Me</span></h2>
                    <p className='text-tartiary text-lg ma-7'>I graduated from University of Wisconsin-Eau Claire in 2014 with a major in Kinesiology and a minor in Gerontology. This led me to work in the non-profit world at the Door County YMCA for eight years. 
                    I started as a part-time Active Older Adult employee, worked my way to Healthy Living Director and then finally the Executive Director of the Northern Door YMCA facility.  </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/2'>
                    <img src='/shed.jpg' alt="mountain" className='w-full h-auto rounded-xl rounded-tr-[80px] md:w-96 md:h-auto'/>
                </div>
                {/* content */}
                <div className='md:w-1/2'>
                    <h2 className='md:tex-5xl text-3xl font-bold text-primary mb-5 leading-normal'>This is EVEN MORE 
                    <hr /><span className='text-tartiary'> About Me</span></h2>
                    <p className='text-tartiary text-lg ma-7'>I enjoy the outdoors. In my free time, I enjoy camping, hiking and exploring! Bike-packing is one of my all-time favorite hobbies. 
                    It could be a ride 20-miles away or across the state. I am happiest when I am on my bike. I have an amazing family and three incredible nephews that always keep me on my toes! </p>
                </div>
            </div>
        </div>
    );
};

export default About;