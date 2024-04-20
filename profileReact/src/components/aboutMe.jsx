

const aboutMe = () => {
    return (
        <div className='my-24 md:px-14 pc-4 max-w-screen-2xl mx-auto'>
            <div className='flex flex-row lg:flex-row justify-between items-start gap-10'>
                <div className='lg:w-1/4'>
                    <h3 className='text-3xl text-primary font-bold lg:w-1/2 mb-3'>A little more about me!</h3>
                    <p className='text-base text-tartiary'>a little more about me...</p>
                </div>
     
                <div>right side</div>
            </div>
        </div>
    );
};

export default aboutMe;