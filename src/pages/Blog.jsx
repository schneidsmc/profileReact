import { useEffect, useState } from 'react';
import CardCarousel from '../components/cardCarousel';
import ello from '../assets/ello.svg';

const Blog = () => {

    const gistUrls = [
        {
            url: 'https://gist.github.com/schneidsmc/9cbb58288655dde6fd327412d2ac7ed9',
            title: 'Im an Apprentice!',
            publishedDate: '2024-07-10', 
        },
        {
            url: '',
            title: 'Check Back in for my Next Post!',
            publishedDate: '', 
        },
    ];
     // Banner image and content data
    //  const banner = '/Ireland.jpg'; 
     const heading = "Megan's Blog"; 
     const subheading = "Exploring the world of coding and beyond."; 

     const [photos, setPhotos ] = useState([]);

     useEffect(() => {
        fetch('/photos.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                } return response.json()
            })
            .then(data => {
                if (Array.isArray(data)) {
                    setPhotos(data);
                } else {
                    console.error('Fetched Data is not an array:', data);
                    setPhotos([]);
                }
            })
            .catch(error => console.error('The pics are too cool to find!', error),
        setPhotos([])
    )}, []);
 
     return (
        
         <div className='gradientBg rounded-xl rounded-br-[80px] md:px-12 p-4 py-20 max-w-screen-2xl mx-auto mt-24 mb-14 justify-center items-center'>
             <div className='flex md:flex-row-reverse justify-between items-center gap-10'>
                 {/*  image */}
                 {/* <div>
                     <img src={banner} alt="Banner" className="lg:h-[330px] rounded-xl rounded-br-[80px]" />
                 </div> */}
 
                 {/*  Content */}
                 <div className='md:w-3/5'>
                     {/* Blog Title */}
                     <div className='px-4 py-2 rounded-lg mb-4'>
                         <h2 className='text-primary md:text-7xl text-4xl font-bold'>{heading}</h2>
                     </div>
 
                     {/* Blog Subheading */}
                     <p className='text-tartiary text-2xl mb-8'>{subheading}</p>
 
                     {/* Gist Buttons */}
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

                     <CardCarousel photos={photos} />


                     {/* PHOTO SCROLL BOX */}
                {/* <div className='photo-scroll-box mt-10'>
                {photos.length > 0 ? (
                    photos.reduce((result, photo, index) => {
                        const columnIndex = Math.floor(index / 2);
                        if (!result[columnIndex]) {
                            result[columnIndex] = [];
                        }
                        result[columnIndex].push(photo);
                        return result;
                    }, []).map((column, columnIndex) => (
                        <div key={columnIndex} className='photo-column'>
                            {column.map((photo, photoIndex) => (
                                <div key={photoIndex} className='photo-card'>
                                    <img src={photo.url} alt={photo.description} className='photo-img' />
                                    <p className='photo-description'>{photo.description}</p>
                                    <p className='photo-date'>{new Date(photo.date).toLocaleDateString()}</p>
                                </div>
                            ))}
                        </div>
                    ))
                    ) : ( <p> No photos available</p>)}

                     </div> */}
                 </div>
             </div>
         </div>
     );
 };
 
 export default Blog;