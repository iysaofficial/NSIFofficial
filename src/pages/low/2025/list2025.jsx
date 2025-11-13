import React, { useState } from "react";
import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";
import { Helmet } from "react-helmet-async";

export default function List2025() {
  const [mode, setMode] = useState("online"); // "online" or "offline"

  const categories = [
    {
      label: "Sekolah Dasar",
      driveLink: {
        online:
          "https://drive.google.com/file/d/1H3fMFbsPh4P_2ZT3cutL81z6NYWxbs1C/view?usp=sharing",
        offline: "",
      },
    },
    {
      label: "Sekolah Menengah Pertama",
      driveLink: {
        online:
          "https://drive.google.com/file/d/19Eli4iraH0nTEQtUH12g-Wez1FecQnAi/view?usp=sharing",
        offline: "",
      },
    },
    {
      label: "Sekolah Menengah Atas",
      driveLink: {
        online:
          "https://drive.google.com/file/d/12gzXhmZ2yfS8K2EGoMdnSmDpTaQ-J6gc/view?usp=sharing",
        offline: "",
      },
    },
    {
      label: "Universitas",
      driveLink: {
        online:
          "https://drive.google.com/file/d/1dhwAEet6oUwuZaZRinmdlI1535hyg_lo/view?usp=sharing",
        offline: "",
      },
    },
  ];

  return (
    <>
      <Helmet>
        <title>Pemenang 2025 | NSIF</title>
        <meta name="description" content="Daftar pemenang NSIF tahun 2025" />
      </Helmet>

      <Navigation />
      {/* BREADCUMB START */}
      <div className="breadcumb-low text-center">
        <h1 className="display-5">Pemenang 2025</h1>
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
                      Daftar pemenang {cat.label} - 2025 ({mode})
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
                        aria-label={`${cat.label} ${mode} coming soon`}
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