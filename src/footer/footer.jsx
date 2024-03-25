import './footercss.css'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from "react";
import UilPhone from '@iconscout/react-unicons/icons/uil-phone'
import UilEmail from '@iconscout/react-unicons/icons/uil-envelope-edit'

const Footer  = () => {

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <footer>
    <div className="top">
        <div className="pages">
            {/* <Link to="/home" className="footer--links" role="button">Why hire us?</Link>     */}
            
            <Dropdown
              onMouseLeave={() => setDropdownVisible(false)}
              onMouseOver={() => setDropdownVisible(true)}
            >
              <Dropdown.Toggle className="footer--links contact-us-button2">
                Contact Us   
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
            
            <Link to="/quote" className="footer--links" role="button">Get a Quote</Link>    
        </div>
      </div>
      <div className="social">
        <SocialIcon className="facebook footer--sociallinks" href="https://www.facebook.com/refreshing.renovations912/" url="wwww.facebook.com"/>
        <SocialIcon className="linkedin footer--sociallinks" href="https://www.linkedin.com/in/refreshing-renovations-244978278/" url="wwww.linkedin.com" />
        <SocialIcon className="instagram footer--sociallinks" href="https://www.instagram.com/refreshing.renovations/?hl=en" url="wwww.instagram.com" />
        <SocialIcon className="nextdoor footer--sociallinks" url="wwww.nextdoor.com"/>
      </div>
      <div className="info">
        <div className="copyright">2024 Copyright &copy; Precious Hamilton</div>
      </div>

    </footer>
  )
}

export default Footer 