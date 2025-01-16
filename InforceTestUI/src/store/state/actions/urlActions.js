import { UrlService } from "../../../utils/services/UrlService";
import {
  addUrl,
  getAllUrls,
  deleteUrlReducer,
  updateUrlReducer,
  getUrlById,
} from "../reduserSlises/urlSlice";

export const getUrls = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("accessToken");
    UrlService.setAuthorizationToken(token);

    const res = await UrlService.getUrls();

    dispatch(getAllUrls(res));
  } catch (error) {
    console.error("Get URLs failed", error);
  }
};

export const getUrlsByCategoryId = (categoryId) => async (dispatch) => {
  try {
    const res = await UrlService.getUrlsByCategoryId(categoryId);
    dispatch(getAllUrls(res));
  } catch (error) {
    console.error("Get URLs by category failed", error);
  }
};

export const fetchUrlById = (id) => async (dispatch) => {
  try {
    const res = await UrlService.getUrlById(id);
    dispatch(getUrlById(res));
    return { success: true, message: "URL fetched successfully" };
  } catch (error) {
    console.error("Fetch URL by ID failed", error);
    return { success: false, message: error.response?.data || "Error fetching URL" };
  }
};

export const createUrl = (model) => async (dispatch) => {
  try {
    const res = await UrlService.createUrl(model);

    dispatch(addUrl(res));
    return { success: true, message: "URL created successfully" };
  } catch (error) {
    const errorMessage =
      error.response?.data?.errors?.Name[0] || "An error occurred while creating URL";
    return { success: false, message: errorMessage };
  }
};

export const deleteUrl = (id) => async (dispatch) => {
  try {
    const response = await UrlService.deleteUrl(id);

    dispatch(deleteUrlReducer({ id }));

    return { success: true, message: response };
  } catch (error) {
    console.error("Delete URL failed", error);
    return { success: false, message: error.response?.data || "Error deleting URL" };
  }
};

export const updateUrl = (model) => async (dispatch) => {
  try {
    const response = await UrlService.updateUrl(model);

    dispatch(updateUrlReducer(response));

    return { success: true, message: "URL updated successfully" };
  } catch (error) {
    const errorMessage =
      error.response?.data?.errors?.Name[0] || "An error occurred while updating URL";
    return { success: false, message: errorMessage };
  }
};