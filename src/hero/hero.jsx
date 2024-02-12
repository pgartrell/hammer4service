import "./herocss.css"

function Hero() {
    return (
        <header className="hero m-3">
            <div className="hero--maindiv">
                <h1 className="hero--mainText">Hammer4Service</h1>
                <p className="hero--pText">Where Quality Meets Affordability.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Get a Quote</a>
            </div>
        </header>
    )
}

export default Hero