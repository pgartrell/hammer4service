import "./herocss.css"

function Hero() {
    return (
        <fieldset className="hero--fieldset">
            <legend>Where Quality Meets Affordability</legend>
            <div className="hero--all">
                <header className="hero m-3">
                    <div className="hero--maindiv">
                        <h1 className="hero--mainText">Hammer4Service LLC</h1>
                        <h2>Home renovation experts. Bathroom, Kitchen, Electrical, Sheetrock/Painting, Flooring, and more. </h2>
                        <h3>Not sure we can help you? Please reach out.</h3>
                    </div>
                </header>


                <div className='navbar--2'>
                    <a className="navbar--getAquotebutton" href="#" role="button">Get a Quote</a>
                    <a className="phone-number" href="tel:9123561429">Call us directly!</a>
        
                </div>
            </div>
        </fieldset>
    )
}

export default Hero