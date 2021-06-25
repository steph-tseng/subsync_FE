import * as types from "../constants/video.constants";
const initialState = {
  files: null,
  loading: false,
};

const videoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.UPLOAD_FILE_REQUEST:
      return { ...state, loading: true };
    case types.UPLOAD_FILE_SUCCESS:
      return { ...state, files: payload, loading: false };
    case types.UPLOAD_FILE_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default videoReducer;
