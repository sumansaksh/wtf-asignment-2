import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import SigleCard from "./SigleCard.jsx";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const [input, setInput] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [selectData, setSelectData] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231"
    )
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, [selectData, selectValue]);

  console.log(data);

  const handleChange = (e) => {
    setSelectValue(e.target.value);
    console.log(selectValue, "from handlechange");
    // let { value } = e.target.value;
    fetch(
      "https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231&city=noida"
    )
      .then((res) => res.json())
      .then((res) => setSelectData(res.data));

    console.log(selectData, "fron change");
  };
  return (
    <>
      <div className="Search_main_div">
        <div className="Search_filters">
          <h2>filters</h2>
          <div className="Search_Location">
            <label className="serch_filter_lable">Location</label>
            <br />
            <input placeHolder="Enter Location" type="text" />
          </div>

          <div className="Search_Price">
            <label className="serch_filter_lable">Price</label>
            <br />
            <div className="Search_Price_inputs">
              <input placeHolder="Min" type="text" />
              <input placeHolder="Max" type="text" />
            </div>
          </div>

          <div className="Search_city">
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
        </div>
        <div className="Search_main_container">
          <AiOutlineSearch className="svg1" />
          <input
            className="search_bar"
            value={input}
            placeholder="search gym name here"
          ></input>
          <HiLocationMarker className="svg2" />
          <button className="red_btn">reset</button>

          <div className="Search_result_div">
            <SigleCard data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
