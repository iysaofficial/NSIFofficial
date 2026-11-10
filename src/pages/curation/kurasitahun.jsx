import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navigation, Footer } from "../../components";
import { ambilBerkasKurasi, berkasTampil } from "../../lib/kurasiApi";
import "./Kurasi.css";

/**
 * Berkas kurasi satu edisi, dibaca langsung dari dasbor IYSA — pola yang sama
 * dengan bisf.or.id/Curation/:tahun. Judul kartu = nama dokumen, nama berkas
 * kecil di bawahnya.
 */
export default function KurasiTahun() {
  const { tahun } = useParams();
  const [berkas, setBerkas] = useState(null);
  const [galat, setGalat] = useState(false);

  useEffect(() => {
    let batal = false;
    setBerkas(null);
    setGalat(false);
    ambilBerkasKurasi(tahun)
      .then((d) => { if (!batal) setBerkas(berkasTampil(d)); })
      .catch(() => { if (!batal) setGalat(true); });
    return () => { batal = true; };
  }, [tahun]);

  return (
    <>
      <Helmet>
        <title>{`Kurasi ${tahun} | NSIF`}</title>
        <meta name="description" content={`Dokumen kurasi Puspresnas NSIF ${tahun}`} />
      </Helmet>
      <Navigation />
      <div className="breadcumb-low text-center">
        <h1 className="display-5">Kurasi {tahun}</h1>
        <p className="lead text-muted">Dokumen kurasi Puspresnas</p>
      </div>
      <section className="kurasi-section">
        <div className="kurasi-container">
          {berkas === null && !galat && <p className="kurasi-kabar">Memuat…</p>}
          {galat && <p className="kurasi-kabar">Daftar dokumen gagal dimuat. Coba lagi sebentar lagi.</p>}
          {berkas !== null && berkas.length === 0 && (
            <p className="kurasi-kabar">Belum ada dokumen yang diterbitkan untuk edisi ini.</p>
          )}
          {berkas !== null && berkas.length > 0 && (
            <>
              <p className="kurasi-ringkas">{berkas.length} dokumen</p>
              <div className="kurasi-kartu-grid">
                {berkas.map((f, i) => {
                  const Kartu = f.url ? "a" : "div";
                  const props = f.url ? { href: f.url, target: "_blank", rel: "noreferrer" } : {};
                  return (
                    <Kartu className="kurasi-kartu" key={i} {...props}>
                      {f.jenis === "dokumentasi" && <span className="kurasi-badge">Dokumentasi</span>}
                      <h2>{f.slot}</h2>
                      <p className="kurasi-nama">{f.nama}</p>
                    </Kartu>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
