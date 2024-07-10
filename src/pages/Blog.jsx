

const Blog = () => {
    // Replace with your Gist URLs
    const gistUrls = [
        {
            url: 'https://gist.github.com/schneidsmc/9cbb58288655dde6fd327412d2ac7ed9',
            title: 'Im an Apprentice!',
            icon: '/Users/meganschneider/bootcamp/Class-Files/profileReact/src/assets/ello.svg', 
            publishedDate: '2024-07-10',
        },

        // {
        //     url: 'https://gist.github.com/your-username/gist-id-3',
        //     title: 'Blog Post Title 3',
        //     icon: '/icon3.png', // Replace with actual icon path
        //     publishedDate: '2024-07-10',
        // },
    ];

    return (
        <div className='my-24 md:py-40 px-14 p-4 max-w-screen-lg mx-auto space-y-10'>
            <div className='flex gap-8'>
                {/* Permanent Photo on Top Right */}
                <div className='w-1/4'>
                    <img src='public/Ireland.jpg' alt='Ireland' className='w-full h-auto rounded-lg shadow-md' />
                </div>
                
                {/* Banner and Title */}
                <div className='flex flex-col justify-center items-start'>
                    <h1 className='text-4xl font-bold text-primary mb-4'>My Path in Coding</h1>
                    <div className='bg-primary h-1 w-3/4'></div>
                </div>
            </div>

            {/* Gists Section */}
            <div className='grid grid-cols-3 gap-8 mt-8'>
                {gistUrls.map((gist, index) => (
                    <a key={index} href={gist.url} target='_blank' rel='noopener noreferrer' className='flex flex-col items-center bg-white shadow-md rounded-lg p-4'>
                        <img src={gist.icon} alt='Gist Icon' className='w-12 h-12 mb-2' />
                        <span className='text-lg font-bold'>{gist.title}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Blog;
