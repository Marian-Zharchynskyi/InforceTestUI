import axios from "axios";
import jwtDecode from "jwt-decode";
import { store } from "../../store/store";
import { authUser } from "./../../store/state/reduserSlises/userSlice";

export const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const loginUser = async (email, password) => {
  try {
    const { data } = await axios.post("http://localhost:5205/account/login", {
      email,
      password,
    });

    if (data?.accessToken) {
      localStorage.setItem("accessToken", data.accessToken);

      setAuthorizationToken(data.accessToken);

      const user = jwtDecode(data.accessToken);
      store.dispatch(authUser(user));

      return user;
    } else {
      throw new Error("Failed to log in");
    }
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
