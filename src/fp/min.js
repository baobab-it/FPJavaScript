import min from "lodash-es/min";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("min", min, _falseOptions);
func.placeholder = placeholder;

export default func;
