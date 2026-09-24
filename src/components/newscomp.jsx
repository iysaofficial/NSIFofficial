import React, { useState } from "react";

function Newscomp() {
  const [selectedYear, setSelectedYear] = useState("all");

  const newsData = [
    {
      id: 1,
      year: "2025",
      portal: "Jabaran.id",
      image: "/assets/img/20251.jpg",
      title: "NSIF, ISIF, NRTC, dan IRTC 2025 Sukses Digelar, Hadirkan 774 Tim dari 24 Negara",
      description: "Empat kompetisi ilmiah bergengsi yang diselenggarakan oleh Indonesian Young Scientist Association (IYSA) bekerja sama dengan Sekolah Vokasi Undip dan IISF Turki sukses digelar secara hybrid.",
      link: "https://jabaran.id/nsif-isif-nrtc-dan-irtc-2025-sukses-digelar-hadirkan-774-tim-dari-24-negara/",
      date: "12 November 2025"
    },
    {
      id: 2,
      year: "2025",
      portal: "FK USU",
      image: "https://konten.usu.ac.id/storage/posts/Nov-2025/57089/ISIF%202025.webp",
      title: "Delegasi Fakultas Kedokteran Raih Gold Medal di Ajang Sains Internasional 2025",
      description: "Delegasi Fakultas Kedokteran Universitas Sumatera Utara (USU) berhasil meraih Gold Medal pada kategori Life Science tingkat Universitas di ajang ISIF & NSIF 2025 lewat inovasi Curmahon™.",
      link: "https://fk.usu.ac.id/id/berita/delegasi-fakultas-kedokteran-raih-gold-medal-di-ajang-sains-internasional-2025",
      date: "13 November 2025"
    },
    {
      id: 3,
      year: "2025",
      portal: "SMPN 6 Surabaya",
      image: "https://www.smpn6-sby.sch.id/storage/images/berita/1763117614_0A968C6E-B2FE-4B4D-92B1-9F810D31E46B.jpeg",
      title: "Meraih Gold Medal dalam Lomba National Science and Invention Fair (NSIF) 2025",
      description: "Tiga siswa SMP Negeri 6 Surabaya berhasil meraih Gold Medal dan Best Presentation pada ajang National Science and Invention Fair (NSIF) 2025 dengan penelitian Deteksi Kualitas Air Sungai dengan Makroinvertebrata.",
      link: "https://www.smpn6-sby.sch.id/berita/meraih-gold-medal-dalam-lomba-national-science-and-invention-fair-nsif-2025",
      date: "14 November 2025"
    },
    {
      id: 4,
      year: "2024",
      portal: "MAN 14 Jakarta",
      image: "https://www.man14jkt.sch.id/upload/imagecache/7722530FotoKIR-800x450.jpeg",
      title: "Siswa MAN 14 Jakarta Raih Medali Perak di NSIF 2024",
      description: "Reihan Sakuraghi Arwansyah dan Zalika Imani Hamida siswa MAN 14 Jakarta berhasil meraih Medali Perak kategori Life Science pada National Science and Invention Fair (NSIF) 2024 di Bali.",
      link: "https://www.man14jkt.sch.id/berita/detail/431208/siswa-man-14-jakarta-raih-medali-perak-di-nsif-2024/",
      date: "02 Desember 2024"
    },
    {
      id: 5,
      year: "2024",
      portal: "SMPI Modern Al Fakhir",
      image: "https://cdn.sanity.io/images/vcaarauj/production/92796a6eed2cbed481da75785d0d61feebd959d5-2080x1170.jpg",
      title: "National Science and Innovation Fair (NSIF) 2024",
      description: "Delegasi siswa SMP Islam Modern Al Fakhir berhasil menorehkan prestasi membanggakan dengan meraih Medali Perak pada National Science & Innovation Fair (NSIF) 2024 di Denpasar, Bali.",
      link: "https://www.smpialfakhir.sch.id/blog/national-science-and-innovation-fair",
      date: "10 November 2024"
    }
  ];

  const filteredNews =
    selectedYear === "all"
      ? newsData
      : newsData.filter((item) => item.year === selectedYear);

  return (
    <section className="news-section py-5">
      <div className="container">
        {/* Year Filter Buttons */}
        <div className="d-flex justify-content-center align-items-center gap-2 mb-5 flex-wrap">
          <button
            type="button"
            className={`btn news-filter-btn ${
              selectedYear === "all" ? "active" : ""
            }`}
            onClick={() => setSelectedYear("all")}
          >
            Semua Berita ({newsData.length})
          </button>
          <button
            type="button"
            className={`btn news-filter-btn ${
              selectedYear === "2025" ? "active" : ""
            }`}
            onClick={() => setSelectedYear("2025")}
          >
            Berita 2025 ({newsData.filter((n) => n.year === "2025").length})
          </button>
          <button
            type="button"
            className={`btn news-filter-btn ${
              selectedYear === "2024" ? "active" : ""
            }`}
            onClick={() => setSelectedYear("2024")}
          >
            Berita 2024 ({newsData.filter((n) => n.year === "2024").length})
          </button>
        </div>

        {/* News Grid */}
        <div className="row g-4 justify-content-center">
          {filteredNews.map((news) => (
            <div key={news.id} className="col-12 col-md-6 col-lg-4 d-flex">
              <div className="card news-card w-100 shadow-sm border-0 d-flex flex-column">
                <div className="position-relative overflow-hidden news-img-wrapper">
                  <img
                    src={news.image}
                    className="card-img-top news-img"
                    alt={news.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/img/callbg.jpg";
                    }}
                  />
                  <div className="news-badges d-flex gap-2">
                    <span className="badge badge-year">{news.year}</span>
                    <span className="badge badge-portal">{news.portal}</span>
                  </div>
                </div>

                <div className="card-body d-flex flex-column p-4">
                  {news.date && (
                    <div className="news-meta mb-2 text-muted small d-flex align-items-center gap-1">
                      <i className="fa fa-calendar-o"></i>
                      <span>{news.date}</span>
                    </div>
                  )}

                  <h5 className="card-title news-title mb-3" title={news.title}>
                    {news.title}
                  </h5>

                  <p className="card-text news-desc text-muted flex-grow-1">
                    {news.description}
                  </p>

                  <div className="mt-4 pt-2 border-top">
                    <a
                      href={news.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-read-more w-100 d-flex align-items-center justify-content-center gap-2"
                    >
                      <span>Baca Selengkapnya</span>
                      <i className="fa fa-external-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .news-section {
          background-color: #f8fafc;
          min-height: 60vh;
        }

        .news-filter-btn {
          border-radius: 50px;
          padding: 8px 22px;
          font-weight: 600;
          font-size: 0.95rem;
          border: 1px solid #d1d5db;
          background: #ffffff;
          color: #4b5563;
          transition: all 0.25s ease-in-out;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .news-filter-btn:hover {
          border-color: #0084ff;
          color: #0084ff;
          background: #f0f7ff;
          transform: translateY(-2px);
        }

        .news-filter-btn.active {
          background: linear-gradient(135deg, #0b5ed7 0%, #0084ff 100%);
          border-color: transparent;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(11, 94, 215, 0.3);
        }

        .news-card {
          border-radius: 16px;
          overflow: hidden;
          background: #ffffff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .news-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1) !important;
        }

        .news-img-wrapper {
          height: 220px;
          background: #e2e8f0;
        }

        .news-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .news-card:hover .news-img {
          transform: scale(1.06);
        }

        .news-badges {
          position: absolute;
          top: 14px;
          left: 14px;
          z-index: 2;
        }

        .badge-year {
          background: rgba(11, 94, 215, 0.9);
          backdrop-filter: blur(4px);
          color: #ffffff;
          font-weight: 600;
          font-size: 0.75rem;
          padding: 6px 12px;
          border-radius: 20px;
          letter-spacing: 0.5px;
        }

        .badge-portal {
          background: rgba(17, 24, 39, 0.75);
          backdrop-filter: blur(4px);
          color: #ffffff;
          font-weight: 500;
          font-size: 0.75rem;
          padding: 6px 12px;
          border-radius: 20px;
        }

        .news-title {
          font-size: 1.15rem;
          line-height: 1.45;
          font-weight: 700;
          color: #1e293b;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 2.9em;
        }

        .news-desc {
          font-size: 0.92rem;
          line-height: 1.6;
          color: #64748b !important;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .btn-read-more {
          background: #f1f5f9;
          color: #0b5ed7;
          font-weight: 600;
          font-size: 0.9rem;
          padding: 10px 18px;
          border-radius: 10px;
          border: none;
          transition: all 0.25s ease;
        }

        .btn-read-more:hover {
          background: #0b5ed7;
          color: #ffffff;
          box-shadow: 0 4px 10px rgba(11, 94, 215, 0.25);
        }
      `}</style>
    </section>
  );
}

export default Newscomp;