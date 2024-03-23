function CompContact() {
    return (
        <>
        {/* BREADCUMB START */}
        <div className="breadcumb text-center">
            <h1>Hubungi Kami</h1>
            <p>Jangan ragu untuk menghubungi kami jika Anda membutuhkan bantuan lainnya</p>
        </div>
        {/* BREADCUMB END */}
        <section className="contact-section intregration_area bg_color sec_pad" id="social">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                    <div className="row intregration_logo">
                        {/* instagram */}
                        <div className="col-lg-6 intregration_item instagram text-center">
                        <a
                            href="https://www.instagram.com/nsif_official/"
                            className="intregration_icon"
                            target="-blank"
                        >
                            <img src="../img/new/instagram.png" alt="" />
                            <i className="fab fa-instagram fa-4x"></i>
                            <h4>INSTAGRAM</h4>
                            <p>Ikuti Kami</p>
                        </a>
                        </div>
                        {/* whatsapp */}
                        <div className="col-lg-6 intregration_item whatsapp text-center">
                        <a
                            href="https://wa.me/6281770914129"
                            className="intregration_icon"
                            target="-blank"
                        >
                            <i className="fab fa-whatsapp fa-4x"></i>
                            <h4>WHATSAPP</h4>
                            <p>Kontak Kami</p>
                        </a>
                        </div>
                        {/* gmail */}
                        <div className="col-lg-6 intregration_item gmail text-center">
                        <a
                            href="mailto:nsifofficial.iysa@gmail.com"
                            className="intregration_icon"
                            target="-blank"
                        >
                            <i className="fa fa-envelope fa-4x"></i>
                            <h2>GMAIL</h2>
                            <p>Kirimi kami pesan</p>

                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-5 d-flex align-items-center">
                        <div className="intregration_content">
                            <h4>Media Sosial Kami</h4>
                            <p>
                                Jangan lupa untuk mengikuti media sosial kami untuk mendapatkan informasi terbaru dan acara yang akan datang
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <form action="https://formspree.io/f/xdoqlzwd" method="POST" id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div class="row align-items-stretch mb-5">
                            <div class="col-md-6">
                                {/* Name input */}
                                <div class="form-group">
                                    <input class="form-control" id="name" type="text" name="name" placeholder="Nama *" required />
                                    <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                                {/* Email address input  */}
                                <div class="form-group">
                                    <input class="form-control" id="email" type="email" name="email" placeholder="Email *" required />
                                    <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                    <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>
                                {/* Phone number input */}
                                <div class="form-group mb-md-0">
                                    <input class="form-control" id="phone" type="tel" name="phone" placeholder="Nomor Telepon *" required />
                                    <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                </div>
                            </div>
                            {/* Message input */}
                            <div class="col-md-6">
                                <div class="form-group form-group-textarea mb-md-0">
                                    <textarea class="form-control" id="message" name="message" placeholder="Pesan *" required></textarea>
                                    <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                </div>
                            </div>
                        </div>
                        <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                        {/* Submit Button */}
                        <div class="text-center"><button class="btn btn-action text-uppercase" id="submitButton" type="submit">Kirim Pesan</button></div>
                    </form>
                </div>
            </div>
        </section>
    </>
    )
}

export default CompContact;