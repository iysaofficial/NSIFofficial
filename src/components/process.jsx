function Process() {
    return (
        <>
        <div className="body_wrapper">
      <section className="process_area bg_color sec_pad">
        <div className="container">
          <div className="features_info">
            <img
              className="dot_img"
              //   src={require("../img/home4/divider.png")}
              alt=""
            />
            <h2>Bagaimana cara mendaftar?</h2>
            <div className="video_content">
              <div className="video">
                <a
                  className="popup-youtube video_icon"
                  target="-blink"
                  href="https://www.youtube.com/watch?v=DCw862udnZo"
                >
                  <i className="arrow_triangle-right"></i>
                </a>
              </div>
            </div>
            <div className="row flex-row-reverse">
                <div className="agency_featured_img text-right text-end">
                    <img src='/assets/img/howtoregister.png' alt="" className="pr_70 pl_70"/>
                </div>
            </div>
            <h2>Setelah Mendaftar?</h2>
            <div className="video_content">
              <div className="video">
                <a
                  className="popup-youtube video_icon"
                  target="-blink"
                  href="https://www.youtube.com/watch?v=YBhdvQ1p5xQ"
                >
                  <i className="arrow_triangle-right"></i>
                </a>
              </div>
            </div>
            <div className="row flex-row-reverse">
                <div className="agency_featured_img text-right text-end">
                    <img src='/assets/img/afterregister.png' alt="" className="pr_70 pl_70"/>
                </div>
            </div>
            <div className="dot middle_dot">
              <span className="dot1"></span>
              <span className="dot2"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
    )
}

export default Process;