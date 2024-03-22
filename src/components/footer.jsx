import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";

function Footer() {
    return (
        <>
      <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className="container">
            <div className="row">
              {FooterData.CompanyWidget.map((widget) => {
                return (
                  <Reveal effect="fadeInLeft" duration={500} key={1}>
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
                  </Reveal>
                );
              })}
              {FooterData.AboutWidget.map((widget) => {
                return (
                  <Reveal effect="fadeInLeft" duration={500} key={widget.id}>
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
                  </Reveal>
                );
              })}
              {FooterData.SocialLinks.map((widget) => {
                return (
                  <Reveal effect="fadeInLeft" duration={500} key={widget.id}>
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
                  </Reveal>
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
                  Made with <i className="icon_heart"></i>{" "}
                  <a href="https://github.com/iysaofficial">IYSA IT</a>
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
          "By looking at the development and knowledge of children today about science, invention and innovation, especially in the field of science, it requires us to know the extent of the students insights, knowledge and abilities in applying their knowledge of science.",
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
            link: "",
            data: "Buku Panduan",
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
            id: 1,
            url: "https://www.facebook.com/groups/947919142367894",
            target: "-blank",
            fb: "ti-facebook",
          },
          {
            id: 2,
            url: "mailto:isifofficial.iysa@gmail.com",
            google: "ti-google",
          },
          {
            id: 3,
            url: "https://www.instagram.com/isif_official/",
            ig: "ti-instagram",
          },
        ],
      },
    ],
    socialIcon: [
      {
        id: 1,
        url: "https://www.facebook.com/groups/947919142367894",
        fb: "ti-facebook",
      },
      {
        id: 2,
        url: "mailto:isifofficial.iysa@gmail.com",
        google: "ti-google",
      },
      {
        id: 3,
        url: "https://www.instagram.com/isif_official/",
        ig: "ti-instagram",
      },
      {
        id: 4,
        url: "https://github.com/redheet",
        git: "ti-github",
      },
    ],
    aboutLinks: [
      {
        id: 1,
        url: "#",
        item: "Developer",
      },
      {
        id: 2,
        url: "#",
        item: "Blog",
      },
      {
        id: 3,
        url: "#",
        item: "Investor",
      },
      {
        id: 4,
        url: "#",
        item: "Sitemap",
      },
      {
        id: 5,
        url: "#",
        item: "Jobs",
      },
    ],
    helpLinks: [
      {
        id: 1,
        url: "#",
        item: "Help and Contact",
      },
      {
        id: 2,
        url: "#",
        item: "Fees",
      },
      {
        id: 3,
        url: "#",
        item: "Security",
      },
      {
        id: 4,
        url: "#",
        item: "App",
      },
      {
        id: 5,
        url: "#",
        item: "Shop",
      },
    ],
    PrivacyLinks: [
      {
        id: 1,
        url: "#",
        item: "Privacy Policy",
      },
      {
        id: 2,
        url: "#",
        item: "Legal Agreement",
      },
      {
        id: 3,
        url: "#",
        item: "Feedback",
      },
    ],
    about: [
      {
        id: 1,
        url: "#",
        text: "Company",
      },
      {
        id: 2,
        url: "#",
        text: "Leadership",
      },
      {
        id: 3,
        url: "#",
        text: "Diversity",
      },
      {
        id: 4,
        url: "#",
        text: "Jobs",
      },
      {
        id: 5,
        url: "#",
        text: "Press",
      },
      {
        id: 6,
        url: "#",
        text: "Wavelength",
      },
    ],
    Solution: [
      {
        id: 1,
        url: "#",
        text: "Project Management",
      },
      {
        id: 2,
        url: "#",
        text: "Agile",
      },
      {
        id: 3,
        url: "#",
        text: "Task Management",
      },
      {
        id: 4,
        url: "#",
        text: "Reporting",
      },
      {
        id: 5,
        url: "#",
        text: "Work Tracking",
      },
      {
        id: 6,
        url: "#",
        text: "See All Uses",
      },
    ],
    teamSolution: [
      {
        id: 1,
        url: "#",
        text: "Engineering",
      },
      {
        id: 2,
        url: "#",
        text: "Designers",
      },
      {
        id: 3,
        url: "#",
        text: "Sales",
      },
      {
        id: 4,
        url: "#",
        text: "Developers",
      },
      {
        id: 5,
        url: "#",
        text: "Marketing",
      },
      {
        id: 6,
        url: "#",
        text: "See All team",
      },
    ],
  };
  
