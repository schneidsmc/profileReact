const Blog = () => {
    return (
        <div className='my-24 md:py-40 px-14 p-4 max-w-s mx-auto space-y-10 flex flex-col justify-center items-center'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                {/* Gist Embed 1 */}
                <div className='md:w-1/2'>
                <script src="https://gist.github.com/schneidsmc/9cbb58288655dde6fd327412d2ac7ed9.js"></script>
                </div>
                {/* Content */}
                <div className='md:w-1/2'>
                    <h2 className='md:tex-5xl text-3xl font-bold text-primary mb-5 leading-normal'>
                        Blog Post Title 1
                        <span className='text-tartiary'> - Subtitle</span>
                    </h2>
                    <p className='text-tartiary text-lg ma-7'>
                        Summary or introduction to your blog post content.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;
