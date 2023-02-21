import React from 'react'
import Navbar from '../components/navbar/Navbar'
import VideoSection from '../components/landingPage/video/VideoSection'
import DescriptionSection from '../components/landingPage/description/DescriptionSection'
import PackagesSection from '../components/landingPage/packages/PackagesSection'
import ContactUsSection from '../components/landingPage/contact/ContactUsSection'
import AppSection from '../components/landingPage/app/AppSection'
import Footer from '../components/footer/Footer'
const Home = () => {
  return (
   <>
   <div >
   <Navbar/>
   {/* <PackagesSection/> */}
<DescriptionSection/>
<VideoSection/>
<AppSection/>
   <ContactUsSection/>
   <Footer/>
   </div>
   </>
  )
}

export default Home