import { Navigation, Footer, NewsSection } from "../../components";
import { Helmet } from "react-helmet-async";

function NewsPage() {
  return (
    <>
      <Helmet>
        <title>Berita & Media | NSIF</title>
        <meta
          name="description"
          content="Kumpulan berita, publikasi media, dan informasi terbaru seputar National Science and Invention Fair (NSIF)."
        />
      </Helmet>
      <Navigation />

      {/* BREADCRUMB START */}
      <div className="breadcumb-low text-center">
        <h1>Berita Terbaru</h1>
        <p>Tetap terupdate dengan berita dan wawasan terbaru.</p>
      </div>
      {/* BREADCRUMB END */}

      <NewsSection />

      <Footer />
    </>
  );
}

export default NewsPage;
