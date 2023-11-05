import AboutUs from "./components/AboutUs";
import Address from "./components/Address";
import Babisitters from "./components/Babysitters";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import Header from "./components/Header";
import OurTeam from "./components/OurTeam";
import { Services } from "./components/Services";
import Testimonial from "./components/Testimonial";
import WhyUs from "./components/WhyUs";

function App() {
    return (
        <div>
            <Header />
            <Services />
            <AboutUs />
            <Babisitters />
            <WhyUs />
            <OurTeam />
            <GetInTouch />
            <Testimonial />
            <Address />
            <Footer />
        </div>
    );
}

export default App;
