function MainHero() {
    return (
        <>
        <section className="mainhero-section">
            <div className="container">
                <div className="mx-auto text-center">
                    {/* <h1>BUKA PENDAFTARAN 2025</h1> */}
                    <h1>National Science And Invention Fair</h1>
                    <button className="btn btn-action m-2" onClick={() => alert("Pendaftaran akan segera dibuka!")}>Pendaftaran Ditutup</button>
                    <a className="btn btn-action m-2" href="https://drive.google.com/file/d/1Gg2VUAJQHylCc134xzb6qIVq9XEIiRpt/view?usp=sharing" target="_blank">Buku Panduan</a>
                </div>
            </div>
        </section>
    </>
    )
}

export default MainHero;