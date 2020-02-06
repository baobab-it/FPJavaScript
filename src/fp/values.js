import values from "lodash-es/values";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("values", values, _falseOptions);
func.placeholder = placeholder;

export default func;
