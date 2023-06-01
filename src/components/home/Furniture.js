import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_URL } from "../../config";

function Furniture() {
  const [furniture, setFurniture] = useState();
  useEffect(() => {
    return () => {
      try {
        const getData = async () => {
          const data = await axios.get(`${API_URL}/furniture_category`);
          setFurniture(data);
        };
        getData();
      } catch (error) {
        console.log(error);
      }
    };
  }, []);
  return (
    <div className="container">
      <div className="furniture">
        <h1>Furniture Categories</h1>
        <div className="furniture_cards">
          {furniture?.data?.map((item) => (
            <div className="furniture_card" key={item.id}>
              <div className="card_img">
                <img src={item.image} alt="" />
              </div>
              <h2>{item.name_en}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Furniture;
