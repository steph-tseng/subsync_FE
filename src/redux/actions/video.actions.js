import * as types from "../constants/video.constants";
import api from "../../apiService";

const uploadFile = (files) => async (dispatch) => {
  dispatch({ type: types.UPLOAD_FILE_REQUEST, payload: null });
  try {
    // console.log("actions", files);
    const res = await api.post("upload", files);
    dispatch({ type: types.UPLOAD_FILE_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: types.UPLOAD_FILE_FAILURE, payload: error });
  }
};

const videoActions = {
  uploadFile,
};

export default videoActions;
