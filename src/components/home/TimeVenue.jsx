

const Timevenue = () => {
  return (
    <>
      <section id="about" className="hero-section">
        <div className="back">
          <div className="container">
            <div className="row ">
              <div className="col-md-6  hero-image text-center">
                <img src="/assets/img/venue.jpg" className="img-fluid"></img>
                <a className="font-bold">
                  Lokasi:{" "}
                  <a
                    href="https://maps.app.goo.gl/PHrqZjm1Wahsnrj69"
                    target="_blank"
                  >
                    Klik Disini
                  </a>
                </a>
              </div>
              <div className="col-md-6 hero-image text-center">
                <img src="/assets/img/time.jpg" className="img-fluid"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timevenue;
