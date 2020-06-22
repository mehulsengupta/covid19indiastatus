import axios from "axios";

//Generic function to fetch data from API based on URL
export async function getDataFromApi(url) {
  return await axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      //for failed API call, notify user
      console.error("API Call Failed!! " + error.message);
      // alert("Reload!!!");
      // window.location.reload();
      return null;
    });
}
