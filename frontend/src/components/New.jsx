import React from "react";
import "../css/new.css";
import "../css/media.css";
import Newdata from "../data/Newdata";
import { useState } from "react";

const New = ({ addToCart }) => {
  const [quantities, setQuantities] = useState(Newdata.map(() => 1));

  // function for increment
  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  // funciton for decrement

  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index]--;
      setQuantities(newQuantities);
    }
  };
  const NewPageItems = Newdata.filter((item) => item.type === "newpage");

  return (
    <div>
      <section className="section-1-new">
        <div className="container">
          <h1 className="heading main_heading_contact">New Products</h1>
        </div>
      </section>
      <section className="new_page_section_1">
        <div className="container">
          <div className="new_page_heading">
            <h1 className="small_heading">All products</h1>
          </div>
          <div className="main_grid_new_page">
            {NewPageItems.map((item, index) => (
              <div className="columns_new_page" key={item.id}>
                <div className="new_item_img">
                  <img src={item.img} alt={item.name} />
                  <div className="img_hover_content">
                    {item.targets && (
                      <p>
                        <span className="new_page_target">Targets</span>:{" "}
                        {item.targets}{" "}
                      </p>
                    )}
                    {item.suited && (
                      <p>
                        {" "}
                        <span className="new_page_suited">Suited to: </span>
                        {item.suited}{" "}
                      </p>
                    )}
                    {item.description && (
                      <p>
                        <span className="new_page_description">
                          {" "}
                          description
                        </span>
                        : {item.description}{" "}
                      </p>
                    )}
                  </div>
                </div>
                <div className="new_items_content">
                  <p className="para">{item.name}</p>
                  <span className="price_new_item">{item.price} CAD</span>

                  <div className="main_cart_btn">
                    <div className="new_item_calc">
                      <span onClick={() => handleDecrement(index)}>-</span>
                      <div>{quantities[index]}</div>
                      <span onClick={() => handleIncrement(index)}>+</span>
                    </div>
                    <div
                      className="main_btn add_cart_btn"
                      onClick={() => addToCart(item, quantities[index])}
                    >
                      Add to cart
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default New;
