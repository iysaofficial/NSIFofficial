import React, { useState } from "react";
import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";
import { Helmet } from "react-helmet-async";

export default function List2026() {
  const [mode, setMode] = useState("online"); // "online" or "offline"

  const categories = [
    {
      label: "Sekolah Dasar",
      driveLink: {
        online:
          "https://drive.google.com/file/d/13yqWx2DSDncc0IvyHWFVpNualwrrJ_mH/view?usp=sharing",
        offline:
          "https://drive.google.com/file/d/1p0xWk14Wk3omEhwjuB2ISmmV9aBG_kj8/view?usp=sharing",
      },
    },
    {
      label: "Sekolah Menengah",
      driveLink: {
        online:
          "https://drive.google.com/file/d/1ci0eQv2EekveyRJP2epWFKdE9Lyuqg72/view?usp=sharing",
        offline:
          "https://drive.google.com/file/d/1mmEGvhDqw_nbJQubJDbFt7DC-gUKoDNN/view?usp=sharing",
      },
    },
    {
      label: "Universitas",
      driveLink: {
        online:
          "https://drive.google.com/file/d/13zbnZFQFHOHsFL4FThN8jpsw37KQ8awa/view?usp=sharing",
        offline:
          "https://drive.google.com/file/d/1JHNuA1c41SQqY9odmywW2PAib7pImZ90/view?usp=sharing",
      },
    },
  ];

  return (
    <>
      <Helmet>
        <title>Pemenang 2026 | NSIF</title>
        <meta name="description" content="Daftar pemenang NSIF tahun 2026" />
      </Helmet>

      <Navigation />
      {/* BREADCUMB START */}
      <div className="breadcumb-low text-center">
        <h1 className="display-5">Pemenang 2026</h1>
        <p className="lead text-muted">
          Pilih kategori dan mode untuk melihat PDF pemenang
        </p>
      </div>
      {/* BREADCUMB END */}

      <div className="container py-5">
        {/* Mode Switch (Online / Offline) */}
        <div className="d-flex justify-content-center mb-4">
          <div className="btn-group" role="group" aria-label="Mode selection">
            <button
              type="button"
              className={`btn btn-lg ${
                mode === "online" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setMode("online")}
            >
              Online
            </button>
            <button
              type="button"
              className={`btn btn-lg ${
                mode === "offline" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setMode("offline")}
            >
              Offline
            </button>
          </div>
        </div>

        <div className="row g-4">
          {categories.map((cat) => {
            const link = cat.driveLink[mode]; // jika kosong => falsy
            return (
              <div key={cat.label} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column align-items-center text-center">
                    <div className="mb-3 fs-1">🏆</div>
                    <h5 className="card-title fw-bold">{cat.label}</h5>
                    <p className="text-muted mb-3">
                      Daftar pemenang {cat.label} - 2026 ({mode})
                    </p>

                    {link ? (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        aria-label={`Open ${cat.label} winners PDF (${mode})`}
                      >
                        Open
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        disabled
                        aria-label={`${cat.label} ${mode} Segera Hadir`}
                      >
                        Soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
