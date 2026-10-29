import {
  Navigation,
  Footer,
  MainHero,
  About,
  Organized,
  Category,
  Process,
  BackToTop,
  Video,
} from "../components";

function Home() {
  return (
    <>
      <Navigation />
      <MainHero />
      <About />
      <Organized />
      <Category />
      <Video />
      <Process />
      <BackToTop />
      <Footer />
    </>
  );
}

export default Home;