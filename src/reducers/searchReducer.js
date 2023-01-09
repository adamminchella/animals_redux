const initState = {
  results: [],
  loading: false,
  error: undefined,
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "LOAD_RESULTS":
      return {
        ...state,
        results: action.payload,
        loading: false,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default searchReducer;
