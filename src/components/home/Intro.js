import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_URL } from "../../config";
import Slider from "react-slick";

function Intro() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [data, setData] = useState();
  useEffect(() => {
    try {
      const getData = async () => {
        const dates = await axios.get(`${API_URL}/sliders`);
        setData(dates);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [data]);
  console.log(data);
  return (
    <div className="intro">
      <div className="container">
        <Slider {...settings}>
          {data?.data?.map((item) => {
            const { name_uz, link, image, description_uz } = item;
            return (
              <div className="banner">
                <div className="intL">
                  <h1>{name_uz}</h1>
                  <p>{description_uz}</p>
                  <button>Explore Catalogue</button>
                </div>
                <div className="intR">
                  <img src={image} alt="" />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Intro;
