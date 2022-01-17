import { loadData, saveData } from "../../utils/localStorage";
import {
  JOB_POST_FAILURE,
  JOB_POST_LOADING,
  JOB_POST_SUCCESS,
} from "./actionTypes";

const jobDataFromLS = loadData("allJobs");

const initState = {
  isLoading: false,
  isError: false,
  jobs: jobDataFromLS || [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case JOB_POST_LOADING:
      return { ...state, isLoading: true, isError: false };
    case JOB_POST_SUCCESS:
      console.log("payload in job reducer", payload);
      const updatedData = [...state.jobs, payload];
      saveData(updatedData, "allJobs");

      return {
        ...state,
        isLoading: false,
        isError: false,
        jobs: updatedData,
      };
    case JOB_POST_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
