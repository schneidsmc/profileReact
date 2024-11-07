// import { useEffect, useState } from 'react';
// import CardCarousel from '../components/cardCarousel';
import ello from '../assets/ello.svg';


const Blog = () => {

    const gistUrls = [
        {
            url: 'https://gist.github.com/schneidsmc/8b4e8e1a2ffa885a262add440ed97b64',
            title: 'Feedback as Fuel',
            publishedDate: '2024-11-06', 
        },
        {
            url: 'https://gist.github.com/schneidsmc/bb05699d47bfa6f74702851be460947a',
            title: 'Programming Languages are WILD',
            publishedDate: '2024-10-27', 
        },
        {
            url: 'https://gist.github.com/schneidsmc/256c8408dc44476403be98b345435cad',
            title: 'Halfway There, Still Learning',
            publishedDate: '2024-09-23', 
        },
        {
            url: 'https://gist.github.com/schneidsmc/c725dd6a7b323ca15591cdc5a4851216',
            title: 'Buffering...',
            publishedDate: '2024-09-20', 
        },
        {
            url: 'https://gist.github.com/schneidsmc/1c9562ac5fffc6ac824e09eca87954b7',
            title: 'Crucial Conversations',
            publishedDate: '2024-09-06', 
        },
        {
            url: 'https://gist.github.com/schneidsmc/4d97a1a66f6cf5e9035f36ca638d8cad',
            title: 'Alright Stop, Collaborate and Listen',
            publishedDate: '2024-08-30', 
        },
        {
            url: 'https://gist.github.com/schneidsmc/caf6a35d7babe73fa4b0f001ae899d7e',
            title: 'Coding Milestones',
            publishedDate: '2024-08-17', 
        },
        {
            url: 'https://gist.github.com/schneidsmc/c363a9dad97757dd3fa7893cf92624f8',
            title: 'Non-Technical Skills',
            publishedDate: '2024-08-09', 
        },
        {
            url: 'https://gist.github.com/schneidsmc/8a7daa1b6d690d15a3875f11219113ca',
            title: 'First Day Rituals',
            publishedDate: '2024-07-30', 
        },
        {
            url: 'https://gist.github.com/schneidsmc/9f7087c8c6f074273f6ac2c0a4ea7b62',
            title: 'My Workstation',
            publishedDate: '2024-07-28', 
        },
        {
            url: 'https://gist.github.com/schneidsmc/8069457da738626f45cebbebc2268e68',
            title: 'Letter to Future Me',
            publishedDate: '2024-07-14', 
        },
        {
            url: 'https://gist.github.com/schneidsmc/9cbb58288655dde6fd327412d2ac7ed9',
            title: 'Im an Apprentice!',
            publishedDate: '2024-07-10', 
        },
    ];
     // Banner image and content data
     const banner = '/Ireland.jpg'; 
     const heading = "Just Bloggin'"; 
     const subheading = "Exploring the world of coding and beyond."; 

    //  const [photos, setPhotos ] = useState([]);

    //  useEffect(() => {
    //     fetch('photos.json')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok')
    //             } return response.json()
    //         })
    //         .then(data => {
    //             if (Array.isArray(data)) {
    //                 setPhotos(data);
    //             } else {
    //                 console.error('Fetched Data is not an array:', data);
    //                 setPhotos([]);
    //             }
    //         })
    //         .catch(error => console.error('The pics are too cool to find!', error),
    //     setPhotos([])
    // )}, []);

    return (
        
        <div className='gradientBg2 rounded-xl rounded-br-[80px] md:px-12 p-4 py-20 max-w-screen-2xl mx-auto mt-24 mb-14 flex justify-center items-center'>
            <div className='flex md:flex-row-reverse justify-between items-center gap-10 w-full max-w-7xl'>
                 {/*  image */}
                <div>
                    <img src={banner} alt="Banner" className="lg:h-[630px] rounded-xl rounded-br-[80px]" />
                </div>

                 {/*  Content */}
                <div className='md:w-3/5'>
                     {/* Blog Title */}
                    <div className='px-4 py-2 rounded-lg mb-4'>
                        <h2 className='text-primary md:text-7xl text-4xl font-bold'>{heading}</h2>
                    </div>

                     {/* Blog Subheading */}
                    <p className='text-tartiary font-bold text-3xl mb-8'>{subheading}</p>

                     {/* Blog Buttons */}
                    {gistUrls.map((gist, index) => (
                        <div key={index} className='flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4'>
                            <div className='flex items-center'>
                                <img src= {ello} alt='ello' className='w-12 h-12 mr-4' />
                                <div>
                                    <h2 className='text-lg font-bold'>{gist.title}</h2>
                                    <p className='text-gray-500 text-sm'>{gist.publishedDate}</p>
                                </div>
                            </div>
                            <a href={gist.url} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>Read more</a>
                        </div>
                    ))}

                     {/* <CardCarousel photos={photos} /> */}

                </div>
            </div>
        </div>
    );
};

export default Blog;