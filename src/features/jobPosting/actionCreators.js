import {
  JOB_POST_FAILURE,
  JOB_POST_LOADING,
  JOB_POST_SUCCESS,
} from "./actionTypes";

export const jobPostLoading = () => {
  return {
    type: JOB_POST_LOADING,
  };
};

export const jobPostSuccess = (jobDetails) => {
  return {
    type: JOB_POST_SUCCESS,
    payload: jobDetails,
  };
};

export const jobPostFailure = () => {
  return {
    type: JOB_POST_FAILURE,
  };
};

export const newJobPost = (jobDetails) => (dispatch) => {
  dispatch(jobPostLoading());
  dispatch(jobPostSuccess(jobDetails));
};
