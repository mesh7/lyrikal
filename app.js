const getButton = document.getElementById("get-btn");

const getData = () => {
  axios
    .get("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
    .then((response) => {
      console.log(response);
    });
};
///////////////////////


var url = "https://api.musixmatch.com/ws/1.1/";
const key = "3caa49624d2a1784e8ba3e886b29f346";
// const unirest = require("unirest");
const country = "us";
const size = 10;
const query =
  "chart.tracks.get?apikey=API_KEY&page=1&page_size=_SIZE_&country=COUNTRY_NAME";
var result;

url = url + query.replace("_SIZE_", size).replace("COUNTRY_NAME", country).replace("API_KEY", key);

const getCharts = () => {
  axios.get(url).then((response) => {
    console.log(response);
  });
};



getButton.addEventListener("click", getCharts);

console.log("hh");

///////////////////////////


//   unirest
//     .get(url)
//     .then((resp) => {
//       console.log(resp.body);
//       result = JSON.stringify();
//       return resp.body;
//     })
//     .catch((err) => {
//       console.error(err);
//     });
