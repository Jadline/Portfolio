
import ContactMe from "../components/ContactMe"
import Content from "../components/Content"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import MyStory from "../components/MyStory"
import Navbar from "../components/Navbar"
import SocialLine from "../components/SocialLine"
import TechStack from "../components/TechStack"

function Home(){
    return (
        <div className="relative">
            <Navbar/>
            <SocialLine/>
            <Hero/>
            <TechStack/>
            <Content/>
            <MyStory/>
           <ContactMe/>
           

           <Footer/>
        </div>
    )
}
export default Home