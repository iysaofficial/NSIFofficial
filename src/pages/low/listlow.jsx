import React from "react";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import { Helmet } from "react-helmet-async";

function ListLow() {
  const winners = [
    {
      year: 2025,
      color: "warning",
      link: "/list2025",
      external: true,
    },
    {
      year: 2024,
      color: "primary",
      link: "https://drive.google.com/file/d/1FprgaHepKiWxxrJxRXHEqeRtlpe_z_ue/view?usp=sharing",
      external: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>List Pemenang | NSIF</title>
        <meta name="description" content="Halaman List pemenang NSIF" />
      </Helmet>
      <Navigation />

      {/* BREADCUMB START */}
      <div className="breadcumb-low text-center">
        <h1>List Pemenang</h1>
        <p>Lihat daftar pemenang NSIF dari berbagai tahun</p>
      </div>
      {/* BREADCUMB END */}

      {/* Main Content */}
      <div className="container py-5">
        <div className="row g-4">
          {winners.map((item) => (
            <div key={item.year} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm text-center">
                {/* Color Header */}
                <div
                  className={`bg-${item.color} p-5`}
                  style={{ height: "120px" }}
                >
                  <div className="text-white fs-1">🏆</div>
                </div>

                {/* Card Body */}
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title fw-bold fs-4 mb-3">{item.year}</h5>

                  {/* Link Internal atau External */}
                  {item.external ? (
                    <a
                      href={item.link}
                      rel="noopener noreferrer"
                      className="btn btn-primary rounded-pill px-5"
                    >
                      Open
                    </a>
                  ) : (
                    <a
                      href={item.link}
                      target="_blank"
                      className="btn btn-primary rounded-pill px-5"
                    >
                      Open
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ListLow;
