import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import NavBar from './navbar/navbar.jsx';
import MainPage from './mainpage/mainpage.jsx';
import Footer from './footer/footer';


function App() {
  return (
    <div className='app__maindiv'>
      <NavBar />
      <MainPage />
      <Footer />
    </div>
  )
}

export default App
