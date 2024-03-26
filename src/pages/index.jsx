import Navigation from "../components/navigation";
import Footer from "../components/footer";
import MainHero from "../components/mainhero";
import About from "../components/about";
import Organized from "../components/organized";
import Category from "../components/category";
import Process from "../components/process";
import BackToTop from "../components/backtotp";

import '../assets/themify-icon/themify-icons.css';
import '../assets/simple-line-icon/simple-line-icons.css';
import '../assets/font-awesome/css/all.css';
import '../assets/elagent/style.css';
import '../assets/animate.css';
import '../assets/main.css';
import '../assets/responsive.css'


// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'popper.js';


function Home() {
    return (
        <>
        <Navigation />
        <MainHero />
        <About />
        <Organized />
        <Category />
        <Process />
        <BackToTop />
        <Footer />
    </>
    )
}

export default Home;