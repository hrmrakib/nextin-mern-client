const url = "https://airbnb-data.p.rapidapi.com/WebAPIs/airbnb/languages";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "7530caa1d5mshd6520df84c48991p19b466jsna16a73c4c3c1",
    "x-rapidapi-host": "airbnb-data.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
