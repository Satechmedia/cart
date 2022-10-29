import {useState, useEffect} from 'react';

const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginTop: "20px",
  };
  
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "5px",
    fontSize: "25px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  
  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "5px",
    fontSize: "25px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  
  const sliderStyles = {
    position: "relative",
    height: "100%",
  };
  
  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };
  
  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  };

  const Slider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

        let slider = setInterval(() => {
        setCurrentIndex(newIndex)
        }, 3000);
        return () => clearInterval(slider)
      }, [currentIndex])

    

    // const goToPrevious = () => {
    //   const isFirstSlide = currentIndex === 0;
    //   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    //   setCurrentIndex(newIndex);
    // };
    // const goToNext = () => {
    //   const isLastSlide = currentIndex === slides.length - 1;
    //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
    //   setCurrentIndex(newIndex);
    // };
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
    const slideStylesWidthBackground = {
      ...slideStyles,
      backgroundImage: `url(${slides[currentIndex].url})`,
    };
  
    return (
      <div style={sliderStyles}>
        {/* <div>
          <div onClick={goToPrevious} style={leftArrowStyles}>
            ❰
          </div>
          <div onClick={goToNext} style={rightArrowStyles}>
            ❱
          </div>
        </div> */}
        <div style={slideStylesWidthBackground}></div>
        <div style={dotsContainerStyles}>
          {slides.map((slide, slideIndex) => (
            <div
              style={dotStyle}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default Slider;
