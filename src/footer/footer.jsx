import './footercss.css'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

const Footer  = () => {
  return (
    <footer>
    <div className="top">
        <div className="pages">
        <Link to="/home" className="footer--links" role="button">Why hire us?</Link>    
        <Link to="/home" className="footer--links" role="button">Contact Us</Link>    
        <Link to="/home" className="footer--links" role="button">Get a Quote</Link>    
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