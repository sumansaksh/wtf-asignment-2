import React from "react";
import "./singleCard.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const sigleCard = ({ data, item }) => {
  // console.log(data, "from single card");
  const options = {};
  console.log(item);
  return (
    <>
      {data.map((data, item) => {
        return (
          <>
            <div className="card_main_container">
              <div className="card_image_content">
                <img
                  src="https://lmimirror3pvr.azureedge.net/static/media/18461/3c152e9a-731d-45db-a205-5da7abe818b1/training-load-960x540.jpg"
                  alt="imag"
                />
              </div>
              <div className="card_written_content">
                <h1>{data.gym_name}</h1>
                <p>rating:{data.rating}</p>
                <ReactStars
                  edit={false}
                  color="white"
                  activeColor="red"
                  size="window.innerWidth < 600 ? 20 : 25"
                  value="data.rating"
                  isHalf="true"
                />
                <p>{`${data.address1} ${data.address2} ${data.city}`}</p>
                <p>{`${data.duration_text} away | ${data.distance}`}</p>
                <div className="lowerDiv">
                  <p>
                    {data.plan_price !== null
                      ? `₹ ${data.planprice} for 3 Months`
                      : ""}
                  </p>
                  <button>Book Now</button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default sigleCard;
