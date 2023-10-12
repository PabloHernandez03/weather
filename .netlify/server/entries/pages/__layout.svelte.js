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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e5186ed2 = require("../../chunks/index-e5186ed2.js");
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{background:#fdfdfd;display:grid;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,\n			'Open Sans', 'Helvetica Neue', sans-serif;place-content:center;margin:0;min-height:100vh}*, *::after, *::before{box-sizing:border-box}h1, h2, h3, h4, h5{margin:0}div.svelte-1gbcwvd{aspect-ratio:9 / 16;width:400px;max-width:100%;display:block;box-shadow:0 0 100px rgba(0, 0, 0, 0.1);border-radius:8px;position:relative}",
  map: null
};
const _layout = (0, import_index_e5186ed2.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"svelte-1gbcwvd"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
