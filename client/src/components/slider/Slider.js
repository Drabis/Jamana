import React, { useEffect, useState } from "react";
import "./Slider.css";

const Slider = () => {
  const sliderImages = [
    // "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    // "https://cdn.pixabay.com/photo/2019/01/27/10/39/african-food-3957740_1280.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://cdn.pixabay.com/photo/2017/02/28/14/45/panorama-2105955_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/01/09/15/40/ajt-bin-haddu-4753107_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/03/12/21/38/fort-portal-2138189_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/11/06/13/51/sea-1027983__340.jpg",
    "https://cdn.pixabay.com/photo/2017/01/15/18/55/south-africa-1982418_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/10/31/15/26/kenya-3786063_1280.jpg",
  ];
  const [sliderCounter, setSliderCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderCounter((sliderCounter) =>
        sliderCounter === sliderImages.length - 2 ? 0 : sliderCounter + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div className="sliderTitles">
        <span className="sliderSubTitle">Country & Culture</span>
        <span className="sliderTitle">Jamana</span>
      </div>
      <div
        className="sliderImages"
        style={{ transform: `translateX(${-sliderCounter * 100}vw)` }}
        onClick={() =>
          setSliderCounter(
            sliderCounter === sliderImages.length - 1 ? 0 : sliderCounter + 1
          )
        }
      >
        {sliderImages.map((s) => (
          <img src={s} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Slider;
