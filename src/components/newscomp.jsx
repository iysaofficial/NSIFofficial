import { Link } from "react-router-dom";

function Newscomp () {
    const newsData = [
      {
        id: 1,
        image: "/assets/img/20251.jpg",
        title: "NSIF, ISIF, NRTC, dan IRTC 2025 Sukses Digelar, Hadirkan 774 Tim dari 24 Negara",
        description: "Jabaran.id - Empat kompetisi ilmiah bergengsi yang diselenggarakan oleh Indonesian Young Scientist Association (IYSA) bekerja sama dengan...",
        link: "https://jabaran.id/nsif-isif-nrtc-dan-irtc-2025-sukses-digelar-hadirkan-774-tim-dari-24-negara/"
    },
    ];

    return (
      <>
        <div className="container py-5">
          <div className="row g-4">
            {newsData.map((news) => (
              <div key={news.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                <div className="card h-100 shadow-sm border-0 hover-card">
                  <div className="position-relative overflow-hidden">
                    <img 
                      src={news.image} 
                      className="card-img-top" 
                      alt={news.title}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                  </div>
                  
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold mb-3">{news.title}</h5>
                    <p className="card-text text-muted flex-grow-1">
                      {news.description}
                    </p>

                    <Link to={news.link} className="btn btn-outline-primary mt-3 w-100">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .hover-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .hover-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
          }
          
          .card-img-top {
            transition: transform 0.3s ease;
          }
          
          .hover-card:hover .card-img-top {
            transform: scale(1.1);
          }
        `}</style>
      </>
    );
  };
  
export default Newscomp;