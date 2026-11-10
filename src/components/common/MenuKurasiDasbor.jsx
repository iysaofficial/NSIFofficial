import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ambilTahunBerkas } from "../../lib/kurasiApi";

/**
 * Butir menu Kurasi untuk edisi yang berkasnya ada di dasbor IYSA. Tahunnya
 * tidak ditulis di sini — edisi baru muncul sendiri begitu berkasnya terbit.
 * Kalau API tidak terjangkau, menu ini kosong dan tautan Drive tahun lama di
 * bawahnya tetap tampil.
 */
let simpanan = null;

export default function MenuKurasiDasbor() {
  const [tahun, setTahun] = useState(simpanan ?? []);

  useEffect(() => {
    if (simpanan) return undefined;
    let batal = false;
    ambilTahunBerkas()
      .then((t) => { simpanan = t; if (!batal) setTahun(t); })
      .catch(() => {});
    return () => { batal = true; };
  }, []);

  return tahun.map((t) => (
    <li className="nav-item" key={t}>
      <Link to={`/kurasi/${t}`} title="Kurasi" className="nav-link">
        Kurasi {t}
      </Link>
    </li>
  ));
}
