import unescape from "lodash-es/unescape";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("unescape", unescape, _falseOptions);
func.placeholder = placeholder;

export default func;
