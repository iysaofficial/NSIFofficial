import React, { Component } from "react";

function Footer() {
    return (
        <>
      <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className="container">
            <div className="row">
              {FooterData.CompanyWidget.map((widget) => {
                return (
                    <div className="col-lg-3 col-md-6" target="-blank">
                      <div
                        className="f_widget company_widget wow fadeInLeft"
                        data-wow-delay="0.2s"
                      >
                        <h3 className="f-title f_600 t_color f_size_18">
                          {widget.title}
                        </h3>
                        <p>{widget.description}</p>
                      </div>
                    </div>
                );
              })}
              {FooterData.AboutWidget.map((widget) => {
                return (
                    <div className="col-lg-3 col-md-6">
                      <div
                        className="f_widget about-widget pl_70 wow fadeInLeft"
                        data-wow-delay="0.4s"
                      >
                        <h3 className="f-title f_600 t_color f_size_18">
                          {widget.title}
                        </h3>
                        <ul className="list-unstyled f_list">
                          {widget.menuItems.map((item) => {
                            return (
                              <li key={item.id}>
                                <a href={item.url}>{item.text}</a>
                                <a href={item.link} target="-blank">
                                  {item.data}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                );
              })}
              {FooterData.SocialLinks.map((widget) => {
                return (
                    <div className="col-lg-3 col-md-6">
                      <div
                        className="f_widget social-widget pl_70 wow fadeInLeft"
                        data-wow-delay="0.4s"
                      >
                        <h3 className="f-title f_600 t_color f_size_18">
                          {widget.title}
                        </h3>
                        <div className="f_social_icon">
                          {widget.menuItems.map((item) => {
                            return (
                              <a href={item.url} key={item.id} target="-blink">
                                <i className={item.fb}></i>
                                <i className={item.google}></i>
                                <i className={item.ig}></i>
                                <i className={item.git}></i>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                );
              })}
              {FooterData.ContactInfo.map((widget) => {
                return (
                    <div className="col-lg-3 col-md-6">
                      <div
                        className="f_widget about-widget pl_70 wow fadeInLeft"
                        data-wow-delay="0.4s"
                      >
                        <h3 className="f-title f_600 t_color f_size_18">
                          {widget.title}
                        </h3>
                        <ul className="list-unstyled f_list">
                          {widget.menuItems.map((item) => {
                            return (
                              <li key={item.id}>
                                <a href={item.url} target="-blank">{item.text} </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                );
              })}
              
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-7">
                <p className="mb-0 f_400">{FooterData.copywrite}</p>
              </div>
              <div className="col-lg-6 col-sm-5 text-right">
                <p>
                Copyright © 2024 Official NSIF. Design BY IYSA IT <i className="icon_heart"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </>
    )
}

export default Footer;


const FooterData = {
    CompanyWidget: [
      {
        id: 1,
        title: "NSIF",
        description:
          "Dengan melihat perkembangan dan pengetahuan anak-anak saat ini mengenai ilmu pengetahuan, penemuan dan inovasi khususnya di bidang sains, mengharuskan kita untuk mengetahui sejauh mana wawasan, pengetahuan dan kemampuan siswa dalam mengaplikasikan pengetahuan mereka tentang sains.",
      },
    ],
    AboutWidget: [
      {
        id: 2,
        title: "Tautan Informasi",
        menuItems: [
          {
            id: 1,
            url: "/Faq",
            text: "FAQ",
          },
          {
            id: 2,
            url: "/Contact",
            text: "Kontak",
          },
          {
            id: 3,
            url: "https://drive.google.com/file/d/1hKvIrelIvMSA3ouMYYVfDhkcLdyfUBDf/view?usp=sharing",
            text: "Buku Panduan",
          },
        ],
      },
    ],
    SocialLinks: [
      {
        id: 1,
        title: "Media Sosial",
        menuItems: [
          {
            id: 3,
            url: "https://www.instagram.com/nsif_official/",
            ig: "ti-instagram",
          },
        ],
      },
    ],
    ContactInfo: [
      {
        id: 1,
        title: "Kontak Detail",
        menuItems: [
          {
            id: 1,
            url: "mailto:nsifofficial.iysa@gmail.com",
            text: "nsifofficial.iysa@gmail.com",
            target: "-blank",
          },
          {
            id: 2,
            url: "https://api.whatsapp.com/send/?phone=6281770914129&text&type=phone_number&app_absent=0",
            text: "+62 817-7091-4129",
          },
          {
            id: 3,
            url: "https://goo.gl/maps/9x18coXGCmSscKec6",
            text: "Jl. Kemang RT 03 RW 06 Pasir Putih, Depok, Jawa Barat 16519, Indonesia."
          },
        ],
      },
    ]
  };
  
