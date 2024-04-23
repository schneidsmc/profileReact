import banner from '/viet.jpeg'
import Banner from '../shared/Banner'

export default function Home() {
    return (
        <div className='md:px-12 py-20 p-4 max-w-screen-2xl mx-auto mt-24'>
            <Banner banner={banner} 
            heading='Megan Schneider' 
            subheading='Full Stack Web Developer'
            btn1='Resume'
            btn2='GitHub'/>
        </div>
    );
}


