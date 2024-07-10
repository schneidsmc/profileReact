

const Blog = () => {
    // Replace with your Gist URLs
    const gistUrls = [
        {
            url: 'https://gist.github.com/schneidsmc/9cbb58288655dde6fd327412d2ac7ed9',
            title: 'Im an Apprentice!',
        },
        // {
        //     url: 'https://gist.github.com/your-username/gist-id-2',
        //     title: 'Blog Post Title 2',
        //     icon: '/icon2.png', // Replace with actual icon path
        //     photo: '/photo2.jpg', // Replace with actual photo path
        // },
    ];

    return (
        <div className='my-24 md:py-40 px-14 p-4 max-w-screen-lg mx-auto space-y-10'>
            <div className='flex gap-8'>
                {/* Left Side: Stacked Photos */}
                <div className='flex flex-col justify-between'>
                    {gistUrls.map((gist, index) => (
                        <div key={index} className='mb-4'>
                            <img src={gist.photo} alt='Gist Photo' className='w-24 h-24 object-cover rounded-md' />
                        </div>
                    ))}
                </div>

                {/* Right Side: Buttons */}
                <div className='flex flex-col flex-1 gap-4'>
                    {gistUrls.map((gist, index) => (
                        <a key={index} href={gist.url} target='_blank' rel='noopener noreferrer' className='flex items-center bg-white shadow-md rounded-lg p-4'>
                            <img src={gist.icon} alt='Gist Icon' className='w-8 h-8 mr-2' />
                            <span className='text-lg font-bold'>{gist.title}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
