function CompFAQ() {
    return (
        <>
        {/* BREADCUMB START */}
        <div className="breadcumb text-center">
            <h1>FAQ</h1>
            <p>Jangan ragu untuk menghubungi kami jika Anda membutuhkan bantuan lainnya</p>
        </div>
        {/* BREADCUMB END */}
        <section className="faq_area bg_color sec_pad">
            <div className="container">
                <div className="row">
                <div className="col-lg-8 mx-auto">
                    <div className="tab-content faq_content" id="myTabContent">
                    <div
                        className="tab-pane fade show active"
                        id="purchas"
                        role="tabpanel"
                        aria-labelledby="purchas-tab"
                    >
                        <div id="accordion">
                        <div className="col-md-6 offset-md-3">
                            <div className="faq-title text-center pb-3">
                            <br />
                            <br />
                            <h2>Setelah mendaftar</h2>
                            </div>
                        </div>
                                {data.map((item, i) => (
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button
                                        className="btn btn-link collapsed"
                                        data-toggle="collapse"
                                        data-target={item.datatarget}
                                        data-aria-expanded="true"
                                        data-aria-controls="collapseOne"
                                        >
                                        <span className="badge">{item.no}</span>
                                        {item.question}
                                        <i className="ti-plus"></i>
                                        <i className="ti-minus"></i>
                                        </button>
                                    </h5>
                                    </div>

                                    <div
                                    id={item.id}
                                    className="collapse"
                                    aria-labelledby="headingTwo"
                                    data-parent="#accordion"
                                    >
                                    <div className="card-body">
                                        {item.answer}
                                    </div>
                                    </div>
                                </div>
                                ))}
                        </div>

                        <div id="accordion3">
                        <div className="col-md-6 offset-md-3">
                            <div className="faq-title text-center pb-3">
                            <br />
                            <br />
                            <h2>Selama Acara</h2>
                            </div>
                        </div>

                        {data2.map((item, i) => (
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                    <button
                                    className="btn btn-link collapsed"
                                    data-toggle="collapse"
                                    data-target={item.datatarget}
                                    data-aria-expanded="true"
                                    data-aria-controls="collapseOne"
                                    >
                                    <span className="badge">{item.no}</span>
                                    {item.question}
                                    <i className="ti-plus"></i>
                                    <i className="ti-minus"></i>
                                    </button>
                                </h5>
                                </div>

                                <div
                                id={item.id}
                                className="collapse"
                                aria-labelledby="headingTwo"
                                data-parent="#accordion"
                                >
                                <div className="card-body">
                                    {item.answer}
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>

                        <div id="accordion3">
                        <div className="col-md-6 offset-md-3">
                            <div className="faq-title text-center pb-3">
                            <br />
                            <br />
                            <h2>Setelah Acara</h2>
                            </div>
                        </div>
                        {data3.map((item, i) => (
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                    <button
                                    className="btn btn-link collapsed"
                                    data-toggle="collapse"
                                    data-target={item.datatarget}
                                    data-aria-expanded="true"
                                    data-aria-controls="collapseOne"
                                    >
                                    <span className="badge">{item.no}</span>
                                    {item.question}
                                    <i className="ti-plus"></i>
                                    <i className="ti-minus"></i>
                                    </button>
                                </h5>
                                </div>

                                <div
                                id={item.id}
                                className="collapse"
                                aria-labelledby="headingTwo"
                                data-parent="#accordion"
                                >
                                <div className="card-body">
                                    {item.answer}
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    </>
    )
}

export default CompFAQ;

const data = [
    {
      no: "1",
      datatarget: "#faqCollapse-1",
      id: "faqCollapse-1",
      question: "Minsa, kapan kami akan mendapatkan LoA kami? Dikirimnya kemana sih?",
      answer:
        "Setelah pendaftaran kamu kami terima, kami akan mengirimkan email konfirmasi selambatnya 1X24 jam, dan untuk LoA akan kami kirimkan ke alamat email ketua tim selambatnya 3X24 jam setelah pendaftaran.",
      gambar:"./src/assets/Logo/OSPC-Logo.WebP",
  
    },
    {
      no: "2",
      datatarget: "#faqCollapse-2",
      id: "faqCollapse-2",
      question:
        "Minsa, aku sudah daftar satu minggu yang lalu tapi kok aku belum terima LoA dan Invoice ya?",
      answer:
        "Coba deh cek folder spam di email ketua tim kamu, mungkin email dari tim IYSA masuk ke folder spam.",
    },
    {
      no: "3",
      datatarget: "#faqCollapse-3",
      id: "faqCollapse-3",
      question: "Upload berkas lomba di mana sih Minsa?",
      answer:
        "Link drive untuk upload berkas dan link untuk upload bukti pembayaran akan dicantumkan di invoice.",
      gambar:"./src/assets/ContohInvoice.jpg",
    },
    {
      no: "4",
      datatarget: "#faqCollapse-4",
      id: "faqCollapse-4",
      question:
        "Aku mau bayar biaya registrasi nih tapi kok aku tidak bisa menemukan Invoicenya ya? dan pembayarannya di transfer kemana sih?",
      answer:
        "Untuk Invoice akan dikirimkan secara terpisah dengan LoA, jika kalian tidak menemukan nya kalian bisa cek pada folder spam email ketua tim, dan invoice maksimal akan dikirimkan 5x24 jam setelah pendaftaran. Pembayaran dapat di transfer ke nomor rekening yang tercantum dalam invoice."
    },
    {
      no: "5",
      datatarget: "#faqCollapse-5",
      id: "faqCollapse-5",
      question:
        "Minsa, aku sudah bayar biaya registrasinya nih, upload bukti pembayarannya kemana ya?",
      answer:
        "Jika sudah melakukan pembayaran, kamu bisa upload buktinya ke link yang tercantum di invoice, dan pastikan kamu mengisi dan mengupload bukti transfer dengan benar agar panitia dapat mendatanya dengan benar juga.",
    },
    {
      no: "6",
      datatarget: "#faqCollapse-6",
      id: "faqCollapse-6",
      question: "Kalau kuitansinya kapan dikirimkan ke kami?",
      answer:
        "Kuitansi pembayaran akan kami kirimkan maksimal 7 hari kerja ke email ketua tim, setelah kamu upload bukti pembayaran ya!",
    },
    {
      no: "7",
      datatarget: "#faqCollapse-7",
      id: "faqCollapse-7",
      question:
        "Minsa, satu minggu lagi penjurian nih kok aku belum terima jadwal presentasi tim aku ya?",
      answer:
        "Jadwal presentasi peserta online akan kami kirimkan selambatnya 2 hari sebelum penjurian berlangsung ke whatsapp grup dan juga email ketua tim. Pastikan kamu rajin cek informasi yang kami berikan di whatsapp grup dan juga email ya!",
    },
  ];

  const data2 = [
    {
      no: "1",
      datatarget: "#faqCollapse-During-1",
      id: "faqCollapse-During-1",
      question: "Kapan jadwal presentasi akan diberikan oleh panitia?",
      answer:
        "Jadwal presentasi akan kami berikan selambatnya 2 hari sebelum penjurian berlangsung atau bisa juga lebih cepat, dan kami kirimkan melalui WA grup dan juga e-mail ketua tim.",
    },
    {
      no: "2",
      datatarget: "#faqCollapse-During-2",
      id: "faqCollapse-During-2",
      question:
        "Presentasi online menggunakan aplikasi apa? Zoom, google meet atau yg lainnya?",
      answer:
        "Untuk penjurian online kami selalu memakai aplikasi Zoom ya teman-teman, dan pastikan aplikasi Zoom kamu sudah yang terbaru yaa.",
    },
    {
      no: "3",
      datatarget: "#faqCollapse-During-3",
      id: "faqCollapse-During-3",
      question: "Kapan link zoom akan diberikan oleh panitia?",
      answer:
        "Link Zoom akan kami berikan dihari penjurian, dan akan kami kirim berkala di grup sesuai jam presentasi tim kalian ",
    },
    {
      no: "4",
      datatarget: "#faqCollapse-During-4",
      id: "faqCollapse-During-4",
      question: "Berapa banyak akun zoom yang bisa join dan penamannya seperti apa?",
      answer:
        'Teman-teman bisa masuk ke Zoom maksimal dengan 5 akun untuk peserta, dan semua akun Zoom harus mengikuti format nama yang sudah  kami berikan yaitu "Nomor ruangan_Nama Ketua Tim_Nama Institusi"',
    },
    {
      no: "5",
      datatarget: "#faqCollapse-During-5",
      id: "faqCollapse-During-5",
      question: "Berapa durasi peserta melakukan presentasi?",
      answer:
        "Teman-teman akan diberikan waktu 15 menit untuk 1 sesi presentasi yang akan dibagi 2 yaitu 7 menit awal untuk presentasi dan 8 menit akhir untuk sesi tanya jawab dengan juri",
    },
  ];
  
  const data3 = [
    {
      no: "1",
      datatarget: "#faqCollapse-After-1",
      id: "faqCollapse-After-1",
      question: "Kapan pengumuman pemenang?",
      answer:
        "Pengumuman pemenang dilaksanakan pada hari terakhir disetiap event, kamu bisa cek tanggalnya di jadwal yang tertera di Guide Book.",
    },
    {
      no: "2",
      datatarget: "#faqCollapse-After-2",
      id: "faqCollapse-After-2",
      question: "Di mana kami bisa melihat hasil pemenang?",
      answer:
        "Kamu bisa cek hasil pemenang di official website dari event yang kamu ikuti",
    },
    {
      no: "3",
      datatarget: "#faqCollapse-After-3",
      id: "faqCollapse-After-3",
      question: "Kapan E-certificate akan dikirimkan?",
      answer:
        "IYSA TIDAK mengirimkan E-Certificate untuk peserta Nasional atau Peserta Indonesia yang mengikuti event secara online. Peserta Nasional Online hanya akan mendapatkan sertifikat dalam bentuk TERCETAK/Hard yang nantinya akan dikirimkan bersama dengan medali melalui ekspedisi JNE ",
    },
    {
      no: "4",
      datatarget: "#faqCollapse-After-4",
      id: "faqCollapse-After-4",
      question: "Kapan pengiriman sertifikat peserta online?",
      answer:
        "Sertifikat akan dikirimkan selambatnya satu bulan setelah pengumuman pemenang. Kamu bisa cek secara berkala resi pengiriman yang kami kirimkan di Whatsapp grup apakah sertifikat kamu sudah dikirim atau belum.",
    },
    {
      no: "5",
      datatarget: "#faqCollapse-After-5",
      id: "faqCollapse-After-5",
      question: "Di mana kami bisa mendapatkan sertifikat supervisor/pembimbing?",
      answer:
        "Kamu bisa melihat dan mengunduh sertifikat supervisor/pembimbing di official website dari event yang kamu ikuti",
    },
    {
      no: "6",
      datatarget: "#faqCollapse-After-6",
      id: "faqCollapse-After-6",
      question: "Bagaimana cara melakukan penggandaan medali?",
      answer:
        "Untuk peserta offline kamu bisa langsung melakukan penggandaan medali di tempat setelah pengumuman pemenang berlangsung. Dan untuk peserta online kamu bisa melakukan penggandaan medali melalui link yang kami kirimkan di Whatsapp grup, kami akan mengirimkan informasi penggandaan di Whatsapp grup selambatnya 2 hari setelah pengumuman pemenang. ",
    },
  ];