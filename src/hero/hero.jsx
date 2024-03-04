import { Link } from "react-router-dom"
import { useState } from "react";
import "./herocss.css"
import Dropdown from 'react-bootstrap/Dropdown';

function Hero() {

    const [isDropdownVisible, setDropdownVisible] = useState(false);

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
                  <div>
                    <Link to="/quote" className="navbar--getAquotebutton" role="button">Get a Quote</Link>
                    
                  </div>
                    <div>
                      
                      <Dropdown 
                            onMouseLeave={() => setDropdownVisible(false)}
                            onMouseOver={() => setDropdownVisible(true)}
                            style={{ width: '166px' }}
                      >
                        <Dropdown.Toggle
                        className="contact-us-button"
                        >
                            Contact us directly!
                        </Dropdown.Toggle>
                        <Dropdown.Menu show={isDropdownVisible}>
                          <Dropdown.Item className="phone-number" href="tel:9293561429">
                            Call us: (929) 356-1429
                          </Dropdown.Item>
                          <Dropdown.Item className="email" href="mailto: hammer4service@gmail.com">
                            Send Email: hammer4service@gmail.com
                          </Dropdown.Item>
                        </Dropdown.Menu>
                  

                      </Dropdown>
                    </div>
                </div>
          </div>
        </fieldset>
    )
}

export default Hero