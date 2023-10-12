var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  get: () => get
});
module.exports = __toCommonJS(stdin_exports);
const FETCH_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    "X-RapidAPI-Key": "71e59e906dmshfdc9ed284df2469p1b599cjsn0355f0f200d5"
  }
};
async function get(event) {
  var _a;
  const { searchParams } = event.url;
  const query = (_a = searchParams.get("q")) != null ? _a : "Buenos Aires";
  const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, FETCH_OPTIONS);
  const data = await response.json();
  const { location, current } = data;
  const { country, localtime, name } = location;
  const { condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir } = current;
  const { text, icon } = condition;
  const body = {
    conditionText: text,
    conditionIcon: icon,
    country,
    localtime,
    locationName: name,
    humidity,
    isDay: is_day,
    feelsLike: feelslike_c,
    temperature: temp_c,
    windSpeed: wind_kph,
    windDir: wind_dir
  };
  return {
    status: 200,
    body
  };
}
