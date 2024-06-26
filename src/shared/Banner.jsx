const Banner = ({banner, heading, subheading, btn1, btn2}) => {
    return (
  
            <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
                <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
                    {/* Banner image */}
                    <div>
                        <img src={banner} alt="viet" className="lg:h-[330px] rounded-xl rounded-br-[80px]"/>
                    </div>

                    {/* Banner Content */}
                    <div className='md:w-3/5'>
                        <h2 className='md:text-7xl text-4xl font-bold text-primary mb-6 leading-relaxed'>{heading}</h2>
                        <p className='text-tartiary text-2xl mb-8'>
                            {subheading}
                        </p>
                        <div className='space-x-5 space-y-4'>
                            <a href="/MEGAN SCHNEIDER _ Resume (1).pdf" target="_blank" rel="noopener noreferrer" className='btnPrimary'>{btn1}</a>
                            <a href="https://github.com/schneidsmc" target="_blank" rel="noopener noreferrer" className='btnPrimary'>{btn2}</a>
                        </div>
                    </div>       
                </div>
            </div>
    );
};

export default Banner;