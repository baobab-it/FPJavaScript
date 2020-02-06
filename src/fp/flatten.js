import flatten from "lodash-es/flatten";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("flatten", flatten, _falseOptions);
func.placeholder = placeholder;

export default func;
