import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import UilPhone from '@iconscout/react-unicons/icons/uil-phone'
import UilEmail from '@iconscout/react-unicons/icons/uil-envelope-edit'
import "./herocss.css"
import Dropdown from 'react-bootstrap/Dropdown';

function Hero() {

    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const [isModalVisible, setModalVisible] = useState(false)
    
    const [catFacts, setCatFacts] = useState([])

    useEffect(() => {
            let query = `Teach me about cats`
            fetch(`https://catfact.ninja/fact?=${query}`)
            .then((response) => response.json())
            .then(data => setCatFacts({catFacts: data.data}))
            .catch(err => console.log(err))
    }, [])

    window.CommandBar.addArgumentChoices("catFacts", [], {
        onInputChange: catFacts,
        });

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
                    <Link 
                      to="/quote" 
                      className="navbar--getAquotebutton" 
                      role="button"
                      onMouseOver={() => setModalVisible(false)}
                      onMouseLeave={() => setModalVisible(true)}
                      >
                        Get a Quote
                    </Link>
                    {isModalVisible ? null : window.CommandBar.trackEvent("getAQuoteModal", {})}       
                    <Dropdown 
                          onMouseLeave={() => setDropdownVisible(false)}
                          onMouseOver={() => setDropdownVisible(true)}
                    >
                      <Dropdown.Toggle
                      className="contact-us-button"
                      >
                          Contact us directly!
                          
                      </Dropdown.Toggle>
                      <Dropdown.Menu show={isDropdownVisible}>
                        <Dropdown.Item className="phone-number" href="tel:9293561429">
                        <UilPhone className="navbar--phoneicon" size="30" color="black" />
                          Call us: (929) 356-1429
                        </Dropdown.Item>
                        <Dropdown.Item className="email" href="mailto: hammer4service@gmail.com">
                        <UilEmail className="navbar--phoneicon" size="30" color="black" />
                          Send Email: hammer4service@gmail.com
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  
                </div>
          </div>

          <div>
            <h1>Testing API Call</h1>
              <h2>{Object.entries(catFacts).map((facts) => {facts.fact, facts.length} )}</h2>
              <p>{console.log(catFacts.fact)}</p>
          </div>
        </fieldset>
    )
}

export default Hero