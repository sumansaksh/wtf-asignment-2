import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import {
  ALL_GYM_REQUEST,
  ALL_GYM_SUCCES,
  ALL_GYM_FAIL,
  CLEAR_ERRORS,
  SINGLE_GYM_REQUEST,
  SINGLE_GYM_SUCCES,
  SINGLE_GYM_FAIL,
  PLAN_REQUEST,
  PLAN_SUCCES,
  PLAN_FAIL,
} from "../constants/gymConstant";

export const getGyms = () => async (dispatch) => {
  try {
    console.log("entered");
    dispatch({ type: ALL_GYM_REQUEST });
    console.log("request done");
    const gyms = await axios.get(
      `https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231`
    );
    dispatch({ type: ALL_GYM_SUCCES, payload: gyms });
    console.log(gyms, "gymsssss");
  } catch (err) {
    console.log(err);
    dispatch({
      type: ALL_GYM_FAIL,
      payload: err,
    });
  }
};

export const getGymPlan = (id) => async (dispatch) => {
  try {
    console.log(id, "fron sumanaaaaanananaannanananan");
    dispatch({ type: PLAN_REQUEST });
    console.log("request done");
    const plans = await axios.post(`https://devapi.wtfup.me/gym/plan`, {
      gym_id: id,
    });
    dispatch({ type: PLAN_SUCCES, payload: plans });
  } catch (err) {
    console.log(err);
    dispatch({
      type: PLAN_FAIL,
      payload: err,
    });
  }
};

//clearing errors
export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
