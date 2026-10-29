import React, { useState } from "react";

function Newscomp() {
  const [selectedYear, setSelectedYear] = useState("all");

  const newsData = [
    {
      id: 1,
      year: "2026",
      portal: "BeritaInd.com",
      image: "/assets/img/20261.jpg",
      title:
        "Keren, Tim SMA Dea Malela Raih Medali Perunggu di Ajang ISIF-NSIF 2026",
      description:
        "Prestasi membanggakan kembali diraih santri SMA Dea Malela Sumbawa dengan meraih medali perunggu di ajang bergengsi ISIF dan NSIF 2026 di Universitas Indonesia.",
      link: "https://beritaind.com/2026/10/20/keren-tim-sma-dea-malela-raih-medali-perunggu-di-ajang-isif-nsif-2026/",
      date: "20 Oktober 2026",
    },
    {
      id: 2,
      year: "2026",
      portal: "Bercahaya FM",
      image: "/assets/img/20262.jpg",
      title:
        "SMA Negeri 2 Cilacap Sabet Medali Emas NSIF 2026 Berkat Riset Fenomena Fatherless",
      description:
        "Tim riset SMA Negeri 2 Cilacap berhasil mengharumkan nama daerah dengan menyabet medali emas di ajang National Science and Invention Fair (NSIF) 2026 lewat riset fenomena fatherless.",
      link: "https://bercahayafm.cilacapkab.go.id/sma-negeri-2-cilacap-sabet-medali-emas-nsif-2026-berkat-riset-fenomena-fatherless/",
      date: "12 Oktober 2026",
    },
    {
      id: 3,
      year: "2026",
      portal: "Suara Merdeka",
      image: "/assets/img/20263.jpg",
      title: "ISIF dan NSIF 2026 UI: Tim SMA Dea Malela Raih Medali Perunggu",
      description:
        "Dua tim riset SMA Dea Malela Sumbawa sukses menorehkan prestasi gemilang dengan meraih medali perunggu pada ajang ISIF dan NSIF 2026 di Balairung Universitas Indonesia.",
      link: "https://jakarta.suaramerdeka.com/pendidikan/13417784434/isif-dan-nsif-2026-ui-tim-sma-dea-malela-raih-medali-perunggu",
      date: "19 Oktober 2026",
    },
    {
      id: 4,
      year: "2026",
      portal: "Gerbang Indonesia",
      image: "/assets/img/20264.jpg",
      title:
        "Tim SMA Dea Malela Raih Medali Perunggu Pada Ajang ISIF & NSIF 2026 di Kampus Universitas Indonesia",
      description:
        "Tim peneliti muda dari SMA Dea Malela berhasil meraih medali perunggu dalam kompetisi riset sains internasional ISIF dan NSIF 2026 yang berlangsung di Balairung UI.",
      link: "https://gerbangindonesia.co.id/2026/10/19/tim-sma-dea-malela-raih-medali-perunggu-pada-ajang-isif-nsif-2026-di-kampus-universitas-indonesia/",
      date: "19 Oktober 2026",
    },
    {
      id: 5,
      year: "2026",
      portal: "Tagar.co",
      image: "/assets/img/20265.jpg",
      title:
        "Jejak Prestasi Sains Santri Dea Malela, dari WSO hingga Universitas Indonesia",
      description:
        "Santri SMA Dea Malela menorehkan jejak prestasi membanggakan di bidang sains, puncaknya meraih medali di ajang ISIF dan NSIF 2026 di Universitas Indonesia.",
      link: "https://tagar.co/jejak-prestasi-sains-santri-dea-malela-dari-wso-hingga-universitas-indonesia/",
      date: "19 Oktober 2026",
    },
    {
      id: 6,
      year: "2026",
      portal: "Pulau Sumbawa News",
      image: "/assets/img/20266.jpg",
      title:
        "Dua Tim SMA Dea Malela Raih Medali Perunggu di Ajang Sains Nasional dan Internasional",
      description:
        "Dua tim SMA Dea Malela sukses meraih medali perunggu pada kompetisi riset bergengsi tingkat nasional dan internasional, NSIF dan ISIF 2026 di Universitas Indonesia.",
      link: "https://pulausumbawanews.net/2026/10/19/dua-tim-sma-dea-malela-raih-medali-perunggu-di-ajang-sains-nasional-dan-internasional/",
      date: "19 Oktober 2026",
    },
    {
      id: 7,
      year: "2026",
      portal: "SAIM",
      image: "/assets/img/20267.jpg",
      title:
        "Robot Deteksi Banjir Siswa SD SAIM Raih Medali Emas di Kompetisi NSIF 2026",
      description:
        "Siswa SD Sekolah Alam Insan Mulia (SAIM) Surabaya sukses menyabet medali emas di ajang National Science and Invention Fair (NSIF) 2026 berkat inovasi robot deteksi banjir.",
      link: "https://www.saim.sch.id/news/robot-deteksi-banjir-siswa-sd-saim-raih-medali-emas-di-kompetisi-nsif-2026/",
      date: "09 Oktober 2026",
    },
    {
      id: 8,
      year: "2026",
      portal: "Reportase 7",
      image: "/assets/img/20268.jpg",
      title:
        "Dua Tim PMI Dea Malela Sumbawa Raih Medali Perunggu di Ajang Sains Nasional dan Internasional",
      description:
        "Pesantren Modern Internasional (PMI) Dea Malela Sumbawa menorehkan prestasi membanggakan dengan meraih medali perunggu di ajang riset ISIF & NSIF 2026 di Universitas Indonesia.",
      link: "https://www.reportase7.com/2026/10/dua-tim-pmi-dea-malela-sumbawa-raih.html",
      date: "19 Oktober 2026",
    },
    {
      id: 9,
      year: "2026",
      portal: "FTNews",
      image: "/assets/img/20269.jpg",
      title:
        "25 Negara Bersaing di ISIF 2026, Rebut Peluang Emas Golden Ticket Kuliah di UI",
      description:
        "Sebanyak 25 negara berkompetisi di ajang ISIF & NSIF 2026 yang digelar di Balairung Universitas Indonesia, memperebutkan penghargaan dan golden ticket masuk UI.",
      link: "https://ftnews.co.id/25-negara-bersaing-di-isif-2026-rebut-peluang-emas-golden-ticket-kuliah-di-ui",
      date: "19 Oktober 2026",
    },
    {
      id: 10,
      year: "2025",
      portal: "Jabaran.id",
      image: "/assets/img/20251.jpg",
      title:
        "NSIF, ISIF, NRTC, dan IRTC 2025 Sukses Digelar, Hadirkan 774 Tim dari 24 Negara",
      description:
        "Empat kompetisi ilmiah bergengsi yang diselenggarakan oleh Indonesian Young Scientist Association (IYSA) bekerja sama dengan Sekolah Vokasi Undip dan IISF Turki sukses digelar secara hybrid.",
      link: "https://jabaran.id/nsif-isif-nrtc-dan-irtc-2025-sukses-digelar-hadirkan-774-tim-dari-24-negara/",
      date: "12 November 2025",
    },
    {
      id: 11,
      year: "2025",
      portal: "FK USU",
      image:
        "https://konten.usu.ac.id/storage/posts/Nov-2025/57089/ISIF%202025.webp",
      title:
        "Delegasi Fakultas Kedokteran Raih Gold Medal di Ajang Sains Internasional 2025",
      description:
        "Delegasi Fakultas Kedokteran Universitas Sumatera Utara (USU) berhasil meraih Gold Medal pada kategori Life Science tingkat Universitas di ajang ISIF & NSIF 2025 lewat inovasi Curmahon™.",
      link: "https://fk.usu.ac.id/id/berita/delegasi-fakultas-kedokteran-raih-gold-medal-di-ajang-sains-internasional-2025",
      date: "13 November 2025",
    },
    {
      id: 12,
      year: "2025",
      portal: "SMPN 6 Surabaya",
      image:
        "https://www.smpn6-sby.sch.id/storage/images/berita/1763117614_0A968C6E-B2FE-4B4D-92B1-9F810D31E46B.jpeg",
      title:
        "Meraih Gold Medal dalam Lomba National Science and Invention Fair (NSIF) 2025",
      description:
        "Tiga siswa SMP Negeri 6 Surabaya berhasil meraih Gold Medal dan Best Presentation pada ajang National Science and Invention Fair (NSIF) 2025 dengan penelitian Deteksi Kualitas Air Sungai dengan Makroinvertebrata.",
      link: "https://www.smpn6-sby.sch.id/berita/meraih-gold-medal-dalam-lomba-national-science-and-invention-fair-nsif-2025",
      date: "14 November 2025",
    },
    {
      id: 13,
      year: "2024",
      portal: "MAN 14 Jakarta",
      image:
        "https://www.man14jkt.sch.id/upload/imagecache/7722530FotoKIR-800x450.jpeg",
      title: "Siswa MAN 14 Jakarta Raih Medali Perak di NSIF 2024",
      description:
        "Reihan Sakuraghi Arwansyah dan Zalika Imani Hamida siswa MAN 14 Jakarta berhasil meraih Medali Perak kategori Life Science pada National Science and Invention Fair (NSIF) 2024 di Bali.",
      link: "https://www.man14jkt.sch.id/berita/detail/431208/siswa-man-14-jakarta-raih-medali-perak-di-nsif-2024/",
      date: "02 Desember 2024",
    },
    {
      id: 14,
      year: "2024",
      portal: "SMPI Modern Al Fakhir",
      image:
        "https://cdn.sanity.io/images/vcaarauj/production/92796a6eed2cbed481da75785d0d61feebd959d5-2080x1170.jpg",
      title: "National Science and Innovation Fair (NSIF) 2024",
      description:
        "Delegasi siswa SMP Islam Modern Al Fakhir berhasil menorehkan prestasi membanggakan dengan meraih Medali Perak pada National Science & Innovation Fair (NSIF) 2024 di Denpasar, Bali.",
      link: "https://www.smpialfakhir.sch.id/blog/national-science-and-innovation-fair",
      date: "10 November 2024",
    },
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
              selectedYear === "2026" ? "active" : ""
            }`}
            onClick={() => setSelectedYear("2026")}
          >
            Berita 2026 ({newsData.filter((n) => n.year === "2026").length})
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
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
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
