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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e5186ed2 = require("../../chunks/index-e5186ed2.js");
async function getWeatherFrom(query = "Buenos Aires") {
  return fetch(`/api/get-weather?q=${query}`).then((res) => res.json());
}
var weatherFooter_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "footer.svelte-ujr0n8{border:2px solid #000;padding:12px 32px;width:80%;margin:0 auto;border-radius:10px;display:flex;text-align:center;justify-content:space-evenly;position:absolute;left:0;right:0;bottom:32px}span.svelte-ujr0n8{display:block;font-weight:600;font-size:14px}strong.svelte-ujr0n8{color:#444;font-size:14px;font-weight:500}",
  map: null
};
const Weather_footer = (0, import_index_e5186ed2.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="${"svelte-ujr0n8"}"><div><span class="${"svelte-ujr0n8"}">33% </span>
		<strong class="${"svelte-ujr0n8"}">Humidity </strong></div>

	<div><span class="${"svelte-ujr0n8"}">12 km/h </span>
		<strong class="${"svelte-ujr0n8"}">Windspeed </strong></div>

	<div><span class="${"svelte-ujr0n8"}">12\xB0 </span>
		<strong class="${"svelte-ujr0n8"}">Feels like </strong></div>
</footer>`;
});
var weatherIcon_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "img.svelte-76dt81{width:100px;height:auto}",
  map: null
};
const Weather_icon = (0, import_index_e5186ed2.c)(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  let { text } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$1);
  return `<img${(0, import_index_e5186ed2.a)("src", icon, 0)}${(0, import_index_e5186ed2.a)("alt", text, 0)} class="${"svelte-76dt81"}">`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-k7wym4{padding:16px}h1.svelte-k7wym4{font-weight:300;color:#333;text-transform:uppercase;padding:16px 0 0 0}h2.svelte-k7wym4{font-weight:300;font-size:120px;color:#333;text-transform:uppercase;padding:0}h3.svelte-k7wym4{font-weight:700;transform:rotate(-90deg);position:absolute;top:56px;right:12px}",
  map: null
};
const Routes = (0, import_index_e5186ed2.c)(($$result, $$props, $$bindings, slots) => {
  const jamonConQueso = getWeatherFrom();
  $$result.css.add(css);
  return `${function(__value) {
    if ((0, import_index_e5186ed2.i)(__value)) {
      __value.then(null, import_index_e5186ed2.n);
      return ``;
    }
    return function(weather) {
      return `
	<section class="${"svelte-k7wym4"}"><h1 class="${"svelte-k7wym4"}">${(0, import_index_e5186ed2.e)(weather.locationName)}</h1>
		<h2 class="${"svelte-k7wym4"}">${(0, import_index_e5186ed2.e)(weather.temperature)}\xBA</h2>
		<h3 class="${"svelte-k7wym4"}">${(0, import_index_e5186ed2.e)(weather.conditionText)}</h3>
		${(0, import_index_e5186ed2.v)(Weather_icon, "WeatherIcon").$$render($$result, {
        text: weather.conditionText,
        icon: weather.conditionIcon
      }, {}, {})}</section>
	${(0, import_index_e5186ed2.v)(Weather_footer, "WeatherFooter").$$render($$result, {}, {}, {})}
`;
    }(__value);
  }(jamonConQueso)}`;
});
