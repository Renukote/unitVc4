import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";
import { loadData, saveData } from "../../utils/localStorage";

const tokenFromLS = loadData("userToken");
console.log("tokenFromLS", tokenFromLS);

const initState = {
  isLoading: false,
  isError: false,
  token: tokenFromLS || "",
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return { ...state, isLoading: true, isError: false, token: "" };
    case LOGIN_SUCCESS:
      saveData(payload, "userToken");
      return { ...state, isLoading: false, isError: false, token: payload };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true, token: "" };
    default:
      return state;
  }
};
