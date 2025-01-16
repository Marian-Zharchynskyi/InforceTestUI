import {
  authUser,
  logout
} from "./../reduserSlises/userSlice";
import { AuthService } from "../../../utils/services/AuthService";
import { jwtDecode } from "jwt-decode";
import { authUser, logout } from "./../reduserSlises/userSlice";
import jwtDecode from "jwt-decode";

export const signInUser = (model) => async (dispatch) => {
  try {
    const response = await AuthService.signIn(model);
    await AuthByToken(response.accessToken)(dispatch);
    return { success: true, message: "You login successfully!" };
  } catch (error) {
    const errorMessage = error.response?.data;
    return { success: false, message: errorMessage };
  }
};

export const AuthByToken = (accessToken) => async (dispatch) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    AuthService.setAuthorizationToken(accessToken);
    const user = jwtDecode(accessToken);
    dispatch(authUser(user));
  } else {
    localStorage.removeItem("accessToken");
    AuthService.setAuthorizationToken(null);
    dispatch(logout());
  }
};

export const logoutUser = () => async (dispatch) => {
  localStorage.removeItem("accessToken");
  AuthService.setAuthorizationToken(null);
  dispatch(logout());
};


export const signUpUser = (model) => async (dispatch) => {
  try {
    const response = await AuthService.signUp(model);

    const tokens = response;

    await AuthByToken(tokens)(dispatch);

    return { success: true, message: response.message };
  } catch (error) {
    const errorMessage = error.response?.data;
    return { success: false, message: errorMessage };
  }
};