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
                    <p className='text-tartiary text-lg ma-7'>Welcome to my portfolio! I am a recent Bootcamp graduate from the UW Extension Program. I have a unique blend of passion and determination that has proven to be helpful throughout my career.
                    I have an extremely purpose-driven mindset that allows me to think outside of the box for any challenges that arise. I am a life-long learner and I genuinely enjoy gaining knowledge from anyone or any situation. 
                    I have learned Javascript, APIs, Node.js, OOP, Express.js, SQL, ORM, MVC, PWAs, React and the MERN Stack. Check out my <a href="/Projects" className="text-tartiary underline">Projects</a> page to see what some creations!</p>
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
                    I started as a part-time Active Older Adult employee and worked my way to Healthy Living Director and then finally the Executive Director of the Northern Door YMCA Facility.  </p>
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
                    <p className='text-tartiary text-lg ma-7'>I enjoy the outdoors. In my freetime, I enjoy camping, hiking and exploring! Bike-packing is one of my all-time favorite hobbies. 
                    It could be a ride 20-miles away or across the state, I am happiest when I am on my bike. I have an amazing family and three incredible nephews that always keep me on my toes! </p>
                </div>
            </div>
        </div>
    );
};

export default About;