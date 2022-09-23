import {
  ALL_GYM_REQUEST,
  ALL_GYM_SUCCES,
  ALL_GYM_FAIL,
  SINGLE_GYM_REQUEST,
  SINGLE_GYM_SUCCES,
  SINGLE_GYM_FAIL,
  CLEAR_ERRORS,
  PLAN_REQUEST,
  PLAN_SUCCES,
  PLAN_FAIL,
} from "../constants/gymConstant";

export const gymReducer = (
  state = { gyms: [], terms: [], singleGym: [] },
  action
) => {
  switch (action.type) {
    case ALL_GYM_REQUEST:
    case SINGLE_GYM_REQUEST:
      return {
        loading: true,
        gyms: [],
        terms: [],
        singleGym: [],
      };

    case ALL_GYM_SUCCES:
      return {
        loading: false,
        gyms: action.payload.data.data,
        terms: action.payload.data.terms,
      };

    case SINGLE_GYM_SUCCES:
      return {
        loading: false,
        singleGym: action.payload.data.data,
      };

    case ALL_GYM_FAIL:
    case SINGLE_GYM_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const planReducer = (state = { plans: [] }, action) => {
  switch (action.type) {
    case PLAN_REQUEST:
      return {
        loading: true,
        plans: [],
      };

    case PLAN_SUCCES:
      return {
        loading: false,
        plans: action.payload,
      };

    case PLAN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
