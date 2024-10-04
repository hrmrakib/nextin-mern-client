// const url =
//   "https://airbnb19.p.rapidapi.com/api/v1/searchPropertyByPlace?id=ChIJ7cv00DwsDogRAMDACa2m4K8&display_name=Chicago%2C%20IL&totalRecords=10&currency=USD&adults=1";
// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "7530caa1d5mshd6520df84c48991p19b466jsna16a73c4c3c1",
//     "x-rapidapi-host": "airbnb19.p.rapidapi.com",
//   },
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

// Airbnb Data
// Response: {"title":"English","subtitle":"Canada","locale":"en-CA"},
// -------------------------------------------------------------
// const url = "https://airbnb-data.p.rapidapi.com/WebAPIs/airbnb/languages";
// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "7530caa1d5mshd6520df84c48991p19b466jsna16a73c4c3c1",
//     "x-rapidapi-host": "airbnb-data.p.rapidapi.com",
//   },
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

// Airbnb
const url =
  "https://airbnb13.p.rapidapi.com/search-geo?ne_lat=52.51&ne_lng=13.41&sw_lat=52.41&sw_lng=13.31&checkin=2025-01-12&checkout=2025-01-13&adults=1&children=0&infants=0&pets=0&page=1&currency=USD";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "7530caa1d5mshd6520df84c48991p19b466jsna16a73c4c3c1",
    "x-rapidapi-host": "airbnb13.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}

const TestCode = () => {
  return <div>TestCode</div>;
};

export default TestCode;
