import './App.css';
import Header from './components/Header';
import MyNav from './components/MyNav';
import up from "./assets/images/up-diyno.webp";
import down from "./assets/images/down-dyno.webp";
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Utility from './components/Utility';
import Faq from './components/Faq';
import RoadMap from './components/RoadMap';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import BackToTop from './components/BackToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  const [preloder, setpreloder] = useState(false)
  useEffect(() => {
    setpreloder(true)
    setTimeout(() => {
      setpreloder(false)
    }, 4000);

  }, [])
  useEffect(() => {
    AOS.init(
      {
        duration: 2000,
        once: true,
      }
    );
  }, [])


  return (
    <div>
      {preloder ? (<div className='fixed top-0 right-0 h-full w-full flex items-center justify-center bg-[#0A4740]'>
        <h1 className="ff-lucky text-center font-normal leading-[90%] drop-shadow-[0px_1.337px_0px_#000] text-[#FBA11D] md:text-[135px] text-[50px] sm:text-[130px]">
          L<span className="text-[#23AAAC]">o</span>
          <span className="text-[#8F78D2]">a</span>
          <span className="text-[#D45B07]">d</span>
          <span className="text-[#8EC627]">i</span>
          <span className="text-[#FCCA2B]">n</span>
          <span className="text-[#8EC627]">g</span>
          ...
        </h1>
      </div>) : (<div className='bg-[#0A4740]' id='home'>
        <div className='bg-[url(./assets/images/herobg.webp)] overflow-x-clip min-h-[930px] relative sm:bg-full bg-cover bg-no-repeat'>
          <MyNav />
          <Header />
          <img className='absolute max-w-[80px] object-contain sm:max-w-[131px] min-h-[165px] bottom-[18%] right-[40%] animate-movebike1' src={up} alt='up' />
          <img className='absolute max-w-[130px] object-contain sm:max-w-[211px] min-h-[267px] bottom-[10%] right-[8%] animate-movebike2' src={down} alt='up' />
        </div>
        <About />
        <Tokenomics />
        <Utility />
        <RoadMap />
        <Faq />
        <Footer />
        <BackToTop />
      </div>)}
    </div>
  );
}

export default App;
