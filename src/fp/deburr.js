import deburr from "lodash-es/deburr";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("deburr", deburr, _falseOptions);
func.placeholder = placeholder;

export default func;
