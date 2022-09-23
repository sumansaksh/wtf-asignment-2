import React from "react";
import "./card.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const sigleCard = ({ data, item }) => {
  const options = {};
  console.log(item);
  return (
    <>
      {data.map((data, item) => {
        return (
          <>
            <>
              <Link
                className="cardGymL"
                to={`/gym_details/${data.gym_name}`}
                onClick={console.log("clicked")}
              >
                <div className="main_div">
                  <div className="sub_main_div">
                    <img
                      className="card_image"
                      src={
                        data.cover_image !== null
                          ? data.cover_image
                          : "https://www.updatepedia.com/wp-content/uploads/2018/02/Gym-Status-and-Gym-Quotes-1-768x450.jpg"
                      }
                      alt="coverImage"
                    />
                    <div className="element_di">
                      <div className="element_div">
                        <h2>{data.gym_name}</h2>
                        <div>
                          <ReactStars
                            edit={false}
                            color="white"
                            activeColor="red"
                            size="window.innerWidth < 600 ? 20 : 25"
                            value="data.rating"
                            isHalf="true"
                          />
                        </div>

                        <p>{`${data.address1} ${data.address2} ${data.city}`}</p>
                        <p>{`${data.duration_text} away | ${data.distance}`}</p>
                      </div>
                      <div className="card_footerDiv">
                        <button className="card_btn">Book Now</button>
                        <h3>
                          {data.plan_price !== null
                            ? `₹ ${data.planprice} for 3 Months`
                            : "for 3 months"}
                        </h3>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          </>
        );
      })}
    </>
  );
};

export default sigleCard;
