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
            <Link className="cardGymL" to={`/gymdetail/${data.gym_name}`}>
              <div className="card_main_container">
                <div className="card_image_content">
                  <img
                    src={
                      data.cover_image !== null
                        ? data.cover_image
                        : "https://www.updatepedia.com/wp-content/uploads/2018/02/Gym-Status-and-Gym-Quotes-1-768x450.jpg"
                    }
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
            </Link>
          </>
        );
      })}
    </>
  );
};

export default sigleCard;
