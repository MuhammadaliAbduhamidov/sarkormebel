import axios from "axios";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { API_URL } from "../../config";

function Content() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const [blog, setBlog] = useState();

  useEffect(() => {
    try {
      const getData = async () => {
        const data = await axios.get(`${API_URL}/blogs`);
        setBlog(data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="contents">
      <div className="container">
        <Slider {...settings}>
          {blog?.data?.map((item) => (
            <div className="content" key={item.id}>
              <div className="date" key={item.id}>
                <span>{item.date}</span>
                <h4>{item.name_en}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Content;
