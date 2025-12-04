import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import { Helmet } from "react-helmet-async";
import Newscomp from "../../components/newscomp";

function Newspage() {
  return (
    <>
      <Helmet>
        <title>List Pemenang | NSIF</title>
        <meta name="description" content="Halaman List pemenang NSIF" />
      </Helmet>
      <Navigation />

      {/* BREADCUMB START */}
      <div className="breadcumb-low text-center">
        <h1>Berita Terbaru</h1>
        <p>Tetap terupdate dengan berita dan wawasan terbaru.</p>
      </div>
      {/* BREADCUMB END */}

      <Newscomp/>

      
      <Footer />
    </>
  );
}

export default Newspage;
