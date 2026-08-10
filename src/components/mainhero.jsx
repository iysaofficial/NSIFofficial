import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const bgImages = [
    'https://ik.imagekit.io/iysaimg/tr:w-1440,q-75,f-auto/ASSET%20IYSA/BG_ui_hvuc8p.png?updatedAt=1781963635481',
    'https://ik.imagekit.io/iysaimg/tr:w-1440,q-75,f-auto/ASSET%20IYSA/nsif_2_kood8y.jpg?updatedAt=1781963636175',
    'https://ik.imagekit.io/iysaimg/tr:w-1440,q-75,f-auto/ASSET%20IYSA/nsif_3_dc8pjp.jpg?updatedAt=1781963635508',
    'https://ik.imagekit.io/iysaimg/tr:w-1440,q-75,f-auto/ASSET%20IYSA/nsif_klwyqv.jpg?updatedAt=1781963635823',
];

function MainHero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % bgImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <section className="mainhero-section">
            {/* Background image slides using <img> for full clarity */}
            {bgImages.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt=""
                    className={`mainhero-slide-img ${index === current ? 'active' : ''}`}
                />
            ))}
            <div className="mainhero-overlay" />

            {/* Content */}
            <div className="container mainhero-content">
                <div className="mx-auto text-center">
                    {/* <h1>BUKA PENDAFTARAN 2025</h1> */}
                    <h1>National Science And Invention Fair</h1>
                    <h2>2026</h2>
                    <Link
                        to="/homeindo"
                        className="btn btn-action m-2"
                    >
                        Daftar disini !
                    </Link>
                    {/* <button className="btn btn-action m-2" onClick={() => alert("Pendaftaran akan segera dibuka!")}>Pendaftaran Ditutup</button> */}
                    
                    <a className="btn btn-action m-2" href="https://drive.google.com/drive/folders/1i8GTeBCaEG-P9-E454iwzNdQXxAAoI7i?usp=sharing" target="_blank">Buku Panduan</a>
                </div>
            </div>

            {/* Slide indicators */}
            <div className="mainhero-indicators">
                {bgImages.map((_, index) => (
                    <button
                        key={index}
                        className={`mainhero-dot ${index === current ? 'active' : ''}`}
                        onClick={() => setCurrent(index)}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
        </>
    )
}

export default MainHero;