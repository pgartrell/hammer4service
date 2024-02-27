import { Link } from "react-router-dom"
import "./herocss.css"

function Hero() {
    return (
        <fieldset className="hero--fieldset">
            <legend>Where Quality Meets Affordability</legend>
            <div className="hero--all">
                <header className="hero m-3">
                    <div className="hero--maindiv">
                        <h1 className="hero--mainText">Hammer4Service <span className="llc">LLC</span></h1>
                        <h2>Home renovation experts. Bathroom, Kitchen, Electrical, Sheetrock/Painting, Flooring, and more. </h2>
                        <h3>Not sure we can help you? Please reach out.</h3>
                    </div>
                </header>


                <div className='navbar--2'>
                    <Link to="/quote" className="navbar--getAquotebutton" role="button">Get a Quote</Link>
                    <a className="phone-number" href="tel:9293561429">Call us directly!</a>
        
                </div>
            </div>
        </fieldset>
    )
}

export default Hero