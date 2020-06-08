import axios from "axios";
import React from "react";
import { Redirect } from "react-router-dom";

//Generic function to fetch data from API based on URL
export async function getDataFromApi(url) {
  return await axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      //console.error(error.toString());
      console.error("API call failed!!");
      //Redirect on failed API fetch to generic error page
      return <Redirect to="/error" />;
    });
}
