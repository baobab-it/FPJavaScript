import isFinite from "lodash-es/isFinite";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isFinite", isFinite, _falseOptions);
func.placeholder = placeholder;

export default func;
