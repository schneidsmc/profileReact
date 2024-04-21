import banner from '/viet.jpeg'
import Banner from '../shared/Banner'

const Home = () => {
    return (
        <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
            <Banner banner={banner} 
            heading='Megan Schneider' 
            subheading='Full Stack Web Developer'
            btn1='Resume'
            btn2='GitHub'/>


        </div>
    );
};

export default Home;

// {/* <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
// <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
//     {/* Banner image */}
//     <div>
//         <img src='/viet.jpeg' alt="viet" className="lg:h-[330px] rounded-xl rounded-br-[80px]"/>
//     </div>

//     {/* Banner Content */}
//     <div className='md:w-3/5'>
//         <h2 className='md:text-7xl text-4xl font-bold text-primary mb-6 leading-relaxed'>Megan Schneider</h2>
//         <p className='text-primary text-2xl mb-8'>
//             Full Stack Web Developer
//         </p>
//         <div className='space-x-5 space-y-4'>
//             <button className='btnPrimary'>Resume</button>
//             <button className='btnPrimary'>GitHub</button>
//         </div>

//     </div>
    
// </div>
// </div> */}