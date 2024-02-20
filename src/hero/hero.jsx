import "./herocss.css"
import Navbar from 'react-bootstrap/Navbar';

function Hero() {
    return (
        <fieldset className="hero--fieldset">
            <legend>Where Quality Meets Affordability</legend>
            <header className="hero m-3">
                <div className="hero--maindiv">
                    <h1 className="hero--mainText">Hammer4Service</h1>
                </div>
            </header>


            <div className='navbar--2'>
                <a className="navbar--getAquotebutton" href="#" role="button">Get a Quote</a>
                <a className="phone-number" href="tel:9123561429">Call us directly!</a>
    
            </div>
        </fieldset>
    )
}

export default Hero