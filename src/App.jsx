import './styles/index.scss'
import Navbar from './components/headers/Navbar'
import Search from './components/headers/Search'
import Slider from './components/slider/Slider'
import ProductCard from './components/mycart/ProductCard';
import image from './assets/2.png';
import image4 from './assets/4.png';
import s1 from './assets/slide-1.png';
import s2 from './assets/slide-2.png';
import s3 from './assets/slide-3.png';
import s4 from './assets/slide-4.png';

function App() {

  const slides = [
    {url: s1, title: 'slide1'},
    {url: s2, title: 'slide2'},
    {url: s3, title: 'slide3'},
    {url: s4, title: 'slide4'}
  ];

  const containerStyles = {
    width: "350px",
    height: "150px",
    margin: "0 auto",
  };

  

  return (
    <main>
      <Navbar />
      <Search />
      <div style={containerStyles}>
        <Slider slides={slides} />
      </div>

      <div className="title"><h4>Popular</h4></div>

      <ProductCard image={image} tag="Hot" title="Hardcover" price="$12" murl="#" style={{ background: 'rgb(134, 239, 164'}} burl="#"/>

      <div className="titles"><h4>New Arrival</h4></div>
      <ProductCard image={image4} tag="New" title="Dry Bone" price="$10" murl="#" burl="#" style={{ background: 'rgb(236, 195, 113)'}}/>
    </main>
  )
}

export default App
