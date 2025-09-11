import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import "../registration/registration.css";

export default function ThankYouIndo() {
  const location = useLocation();

  // Ambil query string dari URL
  const params = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    return {
      namaLengkap: searchParams.get("namaLengkap") || "No data available",
      projectTitle: searchParams.get("projectTitle") || "No data available",
      category: searchParams.get("category") || "No data available",
      namasekolah: searchParams.get("namasekolah") || "No data available",
    };
  }, [location.search]);

  return (
    <section className="thankyou">
      <div className="wrapper">
        <h1>Terima Kasih telah mendaftar!</h1>
        <p>Kami menghargai partisipasi Anda dan menantikan keterlibatan Anda.</p>

        <table className="thankyou-table">
          <tbody>
            <tr>
              <td><strong>Anggota Tim</strong></td>
              <td>{params.namaLengkap}</td>
            </tr>
            <tr>
              <td><strong>Nama Sekolah</strong></td>
              <td>{params.namasekolah}</td>
            </tr>
            <tr>
              <td><strong>Judul Proyek</strong></td>
              <td>{params.projectTitle}</td>
            </tr>
            <tr>
              <td><strong>Kategori Kompetisi</strong></td>
              <td>{params.category}</td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>
            *Jika data muncul, tangkap layar halaman ini sebagai bukti pendaftaran berhasil
          </strong>
        </p>
        <a className="btn btn-action" href="/homeindo">
          Kembali ke menu pendaftaran
        </a>
      </div>
    </section>
  );
}
