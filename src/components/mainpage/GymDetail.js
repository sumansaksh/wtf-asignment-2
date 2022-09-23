import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./gymDetail.css";
import { useSelector, useDispatch } from "react-redux";
import { getGyms } from "../../redux/Actions/gymsAction";
import { getGymPlan } from "../../redux/Actions/gymsAction";
const GymDetail = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { loading, error, gyms, terms } = useSelector((state) => state.gyms);
  const { loadingP, errorP, plans } = useSelector((state) => state.plans);
  const [singleData, setSingleData] = useState({});
  const [benifits, setBenifits] = useState([]);

  useEffect(() => {
    for (let i = 0; i < gyms.length; i++) {
      if (gyms[i].user_id === name) {
        setSingleData(gyms[i]);
        setBenifits(gyms[i].benefits);
      }
    }

    dispatch(getGymPlan(singleData.user_id));

    console.log(singleData, "dispatch done singledata");
  }, [dispatch, singleData, name]);
  return (
    <>
      <div className="detailsMainDiv">
        <h1>{name}</h1>
        <p>{`${singleData.address1} ${singleData.address2}`}</p>
        <div className="detailsSubMaindiv">
          <div className="detailsLeft">
            <h2>Description</h2>
            <p>{singleData.description}</p>
            <h3>Fasilities</h3>
            <div className="fasilitiesDiv">
              {benifits.map((ben) => (
                <div>
                  <img src={ben.image} alt="ben" />
                  <div>{ben.name}</div>
                </div>
              ))}
            </div>
            <h2>Why to choose WTF?</h2>
            <div className="whyTochoose">
              {terms.map((term) => (
                <div>
                  <img src={term.icon} alt="ben" />
                  <div>{term.name}</div>
                </div>
              ))}
            </div>

            <h2>how it works?</h2>
            <div>
              <p>attached in the attachment section Use the following</p>
              <p>attached in the attachment section Use the following</p>
              <p>attached in the attachment section Use the following</p>
              <p>attached in the attachment section Use the following</p>
            </div>
          </div>
          <div detailsRight>
            <h1>choose membership</h1>
            <div>
              <p>plan1</p>
              <h3>wtf fitness</h3>
              <p>attached in the attachment section Use the following</p>
              <p>
                attached in the attachment section Use the following attached in
                the attachment section Use the following
              </p>
            </div>

            <div>
              <p>plan1</p>
              <h3>wtf fitness</h3>
              <p>attached in the attachment section Use the following</p>
              <p>
                attached in the attachment section Use the following attached in
                the attachment section Use the following
              </p>
            </div>

            <div>
              <p>plan1</p>
              <h3>wtf fitness</h3>
              <p>attached in the attachment section Use the following</p>
              <p>
                attached in the attachment section Use the following attached in
                the attachment section Use the following
              </p>
            </div>

            <div>
              <p>plan1</p>
              <h3>wtf fitness</h3>
              <p>attached in the attachment section Use the following</p>
              <p>
                attached in the attachment section Use the following attached in
                the attachment section Use the following
              </p>
            </div>

            <div>
              <p>plan1</p>
              <h3>wtf fitness</h3>
              <p>attached in the attachment section Use the following</p>
              <p>
                attached in the attachment section Use the following attached in
                the attachment section Use the following
              </p>
            </div>

            <div>
              <p>plan1</p>
              <h3>wtf fitness</h3>
              <p>attached in the attachment section Use the following</p>
              <p>
                attached in the attachment section Use the following attached in
                the attachment section Use the following
              </p>
            </div>

            <div>
              <p>plan1</p>
              <h3>wtf fitness</h3>
              <p>attached in the attachment section Use the following</p>
              <p>
                attached in the attachment section Use the following attached in
                the attachment section Use the following
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GymDetail;
