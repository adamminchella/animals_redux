import axios from "axios";

const loading = () => ({ type: "LOADING" });
const loadResults = (results) => ({ type: "LOAD_RESULTS", payload: results });
const error = () => ({ error: true });

export const getResults = (searchTerm) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const url = `https://api.api-ninjas.com/v1/animals?name=${searchTerm}`;

      const headers = {
        "X-Api-Key": "yzbAIVdwLRO0yVt/0kLENw==TqdeYcSzdwQPX73b",
      };

      const results = await axios.get(url, {
        headers: headers,
      });

      if (results.data.length == 0) {
        dispatch(error());
      } else {
        dispatch(loadResults(results.data));
      }
    } catch (err) {
      console.log(err);
    }
  };
};
