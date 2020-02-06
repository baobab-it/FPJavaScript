import toFinite from "lodash-es/toFinite";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("toFinite", toFinite, _falseOptions);
func.placeholder = placeholder;

export default func;
