import isMap from "lodash-es/isMap";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isMap", isMap, _falseOptions);
func.placeholder = placeholder;

export default func;
