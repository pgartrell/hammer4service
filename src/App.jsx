import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import NavBar from './navbar/navbar.jsx';
import MainPage from './mainpage/mainpage.jsx';


function App() {
  return (
    <div className='app__maindiv'>
      <NavBar />
      <MainPage />
    </div>
  )
}

export default App
