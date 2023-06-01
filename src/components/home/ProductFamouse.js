import axios from "axios";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { API_URL } from "../../config";

function ProductFamouse() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const [product, setProduct] = useState();
  useEffect(() => {
    try {
      const getData = async () => {
        const data = await axios.get(`${API_URL}/recomendations`);
        setProduct(data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="product_famouse">
      <div className="container">
        <h1>The most famous products</h1>
        <Slider {...settings}>
          {product?.data?.map((item) => {
            const { name_en, link, id, image, description_en } = item;
            return (
              <div className="product_card" key={id}>
                <img src={image} alt="" />
                <div className="card_text">
                  <h3>{name_en}</h3>
                  <p>{description_en}</p>
                </div>
                <div className="price">
                  <span>Price: negotiable</span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default ProductFamouse;
