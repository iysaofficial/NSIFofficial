import { useState, useEffect } from 'react';
import './organized.css';

const organizers = [
  {
    id: 'fmipa-ui',
    name: 'FMIPA Universitas Indonesia',
    subtitle: 'Fakultas Matematika dan Ilmu Pengetahuan Alam',
    logo: '/assets/logo/Logo FMIPA UI-10.png',
    alt: 'Logo FMIPA UI',
    role: 'Co-Organizer',
    description:
      'Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas Indonesia (FMIPA UI) adalah salah satu institusi pendidikan tinggi sains terkemuka di Indonesia, berfokus pada keunggulan riset, inovasi sains, dan kolaborasi pengembangan potensi generasi muda.',
    website: 'https://sci.ui.ac.id/',
  },
  {
    id: 'iysa',
    name: 'Indonesian Young Scientist Association (IYSA)',
    subtitle: 'Asosiasi Ilmuwan Muda Indonesia',
    logo: '/assets/logo/Iysa.png',
    alt: 'Logo IYSA',
    role: 'Organizer',
    description:
      'Indonesian Young Scientist Association (IYSA) adalah lembaga pengembangan potensi ilmiah dan inovasi pelajar serta saintis muda Indonesia melalui pameran, kompetisi riset, dan jejaring sains tingkat nasional maupun internasional.',
    website: 'https://iysa.or.id/',
  },
];

function Organized() {
  const [selectedOrganizer, setSelectedOrganizer] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedOrganizer(null);
      }
    };

    if (selectedOrganizer) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedOrganizer]);

  return (
    <>
      <section className="event_sponser_area sec_pad">
        <div className="container">
          <div className="event_sponser_inner">
            <div className="event_sponser_item">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-4">
                  <h5 className="h_head sponser_title sponser_title_adjusted">
                    Diselenggarakan oleh :
                  </h5>
                </div>
                <div className="col-lg-9 col-md-8">
                  <div className="organizer_logos_wrapper">
                    {organizers.map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        className="organizer_logo_btn"
                        onClick={() => setSelectedOrganizer(item)}
                        title={`Klik untuk info detail ${item.name}`}
                        aria-label={item.name}
                      >
                        <img
                          src={item.logo}
                          alt={item.alt}
                          className="organizer_logo_img"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {selectedOrganizer && (
        <div
          className="org_modal_overlay"
          onClick={() => setSelectedOrganizer(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="org-modal-title"
        >
          <div
            className="org_modal_box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="org_modal_header">
              <span className="org_modal_badge">{selectedOrganizer.role}</span>
              <button
                type="button"
                className="org_modal_close_btn"
                onClick={() => setSelectedOrganizer(null)}
                aria-label="Tutup popup"
              >
                &times;
              </button>
            </div>

            <div className="org_modal_body">
              <div className="org_modal_logo_preview">
                <img
                  src={selectedOrganizer.logo}
                  alt={selectedOrganizer.alt}
                />
              </div>

              <h3 id="org-modal-title" className="org_modal_title">
                {selectedOrganizer.name}
              </h3>
              <p className="org_modal_subtitle">
                {selectedOrganizer.subtitle}
              </p>
              <p className="org_modal_desc">
                {selectedOrganizer.description}
              </p>
            </div>

            <div className="org_modal_footer">
              <button
                type="button"
                className="org_modal_btn_cancel"
                onClick={() => setSelectedOrganizer(null)}
              >
                Tutup
              </button>
              <a
                href={selectedOrganizer.website}
                target="_blank"
                rel="noopener noreferrer"
                className="org_modal_btn_visit"
              >
                Website Resmi <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Organized;