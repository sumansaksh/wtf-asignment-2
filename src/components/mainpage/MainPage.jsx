import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import SigleCard from "./SigleCard.jsx";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner";
import { useSelector, useDispatch } from "react-redux";
import { getGyms } from "../../redux/Actions/gymsAction";
import "./mainpage.css";

const MainPage = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [selectData, setSelectData] = useState([]);
  const [data, setData] = useState([]);
  const [lat, setLat] = useState(30.325488815850512);
  const [long, setLong] = useState(78.0042384802231);
  const { loading, error, gyms } = useSelector((state) => state.gyms);
  useEffect(() => {
    dispatch(getGyms());
    console.log("dispatch done");
  }, [dispatch, selectData, selectValue, lat, long]);

  const handleChange = (e) => {
    setSelectValue(e.target.value);
    console.log(selectValue, "from handlechange");
    let value = e.target.value;
    if (value === "noida") {
      setLat(30.325488815850512);
      setLong(78.0042384802231);
    } else if (value === "new-delhi") {
      setLat(28.6448);
      setLong(77.216721);
    } else if (value === "ghaziabad") {
      setLat(28.667856);
      setLong(77.449791);
    } else if (value === "delhi") {
      setLat(28.6448);
      setLong(77.216721);
    }
    fetch(
      `https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231&city=noida`
    )
      .then((res) => res.json())
      .then((res) => setSelectData(res.data));

    console.log(selectData, "fron change");
  };
  return (
    <>
      <Banner />
      <div className="parentContainer">
        <div className="search_Bar">
          <AiOutlineSearch className="svg1" />
          <input
            className="search_bar"
            value={input}
            placeholder="search gym name here"
          ></input>
          <MdLocationOn className="svg2" />
          <button className="red_btn">reset</button>
        </div>

        <div className="Search_main_div">
          <div className="Search_filters">
            <h2>filters</h2>

            <label className="serch_filter_lable">Location</label>
            <br />
            <input
              placeHolder="Enter Location"
              type="text"
              className="locationInput"
            />

            <label className="serch_filter_lable">Price</label>
            <br />
            <div className="Search_Price_inputs">
              <input placeHolder="Min" type="text" />
              <input placeHolder="Max" type="text" />
            </div>

            <label className="serch_filter_lable">City</label>
            <br />
            <div className="Search_city_input">
              <select name="" id="" onChange={handleChange}>
                <option value="">city</option>
                <option value="new-delhi">New Delhi</option>
                <option value="ghaziabad"> Ghaziabad</option>
                <option value="noida">Noida</option>
                <option value="delhi">Delhi</option>
              </select>

              <h2>Location</h2>

              {selectData.length !== 0 ? (
                data.map((selectData) => {
                  return (
                    <>
                      <p
                        className="select_p"
                        onClick={console.log(selectData.user_id)}
                      >{`${selectData.address1} ${selectData.address2}`}</p>
                    </>
                  );
                })
              ) : (
                <h1>no data</h1>
              )}
            </div>
          </div>
          <div className="Search_main_container">
            <div className="Search_result_div">
              <SigleCard data={gyms} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
