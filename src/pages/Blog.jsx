

const Blog = () => {

    const gistUrls = [
        {
            url: 'https://gist.github.com/schneidsmc/9cbb58288655dde6fd327412d2ac7ed9',
            title: 'Im an Apprentice!',
            publishedDate: '2024-07-10', 
        },
        {
            url: 'https://gist.github.com/schneidsmc/9cbb58288655dde6fd327412d2ac7ed9',
            title: 'Im an Apprentice! 2',
            publishedDate: '2024-07-12', 
        },
    ];

    return (
        <div className='my-24 md:py-40 px-14 p-4 max-w-screen-lg mx-auto space-y-10'>
            {/* Banner and Title */}
            <div className='flex items-center'>
                {/* Permanent Photo on the Left */}
                <div className='w-1/4 mr-8'>
                    <img src='/public/Ireland.jpg' alt='Ireland' className='w-full h-auto rounded-lg shadow-md' />
                </div>
                
                {/* Banner and Title */}
                <div>
                    <h1 className='text-4xl font-bold text-primary mb-4'>My Path in Coding</h1>
                    <div className='bg-primary h-1 w-3/4'></div>
                </div>
            </div>

            {/* Gist Buttons */}
            <div className='mt-8'>
                {gistUrls.map((gist, index) => (
                    <div key={index} className='flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4'>
                        <div className='flex items-center'>
                            <img src='/icon-placeholder.png' alt='Gist Icon' className='w-12 h-12 mr-4' />
                            <div>
                                <h2 className='text-lg font-bold'>{gist.title}</h2>
                                <p className='text-gray-500 text-sm'>{gist.publishedDate}</p>
                            </div>
                        </div>
                        <a href={gist.url} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>Read more</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
