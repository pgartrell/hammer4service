import NavBar from "../navbar/navbar"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import './gallerycss.css'
import Img1 from "../assets/charlesdeluvio.jpg"
import Img2 from "../assets/chastity-cortijo.jpg"
import Img3 from "../assets/bathroom.jpg"
import Img4 from "../assets/christian-mackie.jpg"
import Img5 from "../assets/emmanuel-ikwuegbu.jpg"
import Img6 from "../assets/hobi-industri.jpg"
import Img7 from "../assets/lotus-design-n-print.jpg"
import Img8 from "../assets/blue-reno1.jpg"
import Img9 from "../assets/flooring.jpg"
import Img10 from "../assets/electrical-panel.jpg"
import Img11 from "../assets/half-floor.jpg"
import Footer from "../footer/footer"


const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },    {
      id: 2,
      imgSrc: Img2,
    },    {
      id: 3,
      imgSrc: Img3,
    },    {
      id: 4,
      imgSrc: Img4,
    },    {
      id: 5,
      imgSrc: Img5,
    },    {
      id: 6,
      imgSrc: Img6,
    },    {
      id: 7,
      imgSrc: Img7,
    },{
      id: 8,
      imgSrc: Img8,
    },{
      id:9,
      imgSrc: Img9,
    },{
      id:10,
      imgSrc: Img10,
    },{
      id:11,
      imgSrc: Img11,
    }
  ]

  return (
    <div className="gallery__maindiv">
      <NavBar className="gallery__navbar"/>
      <ResponsiveMasonry 
      
      columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
      >
        <Masonry className="gallery__masonry">
            {data.map((image, i) => (
                <img
                    className="gallery__img"
                    key={i}
                    src={image.imgSrc}
                    style={{width: "100%", display: "block"}}
                    alt=""
                />
            ))}
        </Masonry>
      </ResponsiveMasonry>
      <Footer />
    </div>
      )
}

export default Gallery