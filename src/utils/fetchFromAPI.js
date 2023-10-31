/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-catch */
// import.meta.env.VITE_REACT_APP_RAPID_API_KEY

import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 500,
  },
  headers: {
    "X-RapidAPI-Key":
      import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

//!-------------------------------------------------------------------------------------------------------

// export const BASE_URL = "https://youtube-v31.p.rapidapi.com";
// const API_KEY = "YOUR_API_KEY"; // Replace with your actual API key

// export const fetchFromAPI = async (url) => {
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": API_KEY,
//       "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//     },
//   };

//   const apiUrl = `${BASE_URL}/${url}`;

//   try {
//     const response = await fetch(apiUrl, options);
//     if (response.ok) {
//       const data = await response.json();
//       return data;
//     } else {
//       throw new Error(`Request failed with status: ${response.status}`);
//     }
//   } catch (error) {
//     throw new Error(`Request failed with error: ${error.message}`);
//   }
// };
