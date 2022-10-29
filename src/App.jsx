import './styles/index.scss'
import Navbar from './components/headers/Navbar'
import Search from './components/headers/Search'
import Slider from './components/slider/Slider'

function App() {

  const slides = [
    {url: 'http://localhost:5173/src/assets/slide-1.png', title: 'slide1'},
    {url: 'http://localhost:5173/src/assets/slide-2.png', title: 'slide2'},
    {url: 'http://localhost:5173/src/assets/slide-3.png', title: 'slide3'},
    {url: 'http://localhost:5173/src/assets/slide-4.png', title: 'slide4'}
  ];

  const containerStyles = {
    width: "300px",
    height: "130px",
    margin: "0 auto",
  };

  

  return (
    <div>
      <Navbar />
      <Search />
      <div style={containerStyles}>
        <Slider slides={slides} />
      </div>
    </div>
  )
}

export default App
