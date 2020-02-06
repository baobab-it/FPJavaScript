import functions from "lodash-es/functions";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("functions", functions, _falseOptions);
func.placeholder = placeholder;

export default func;
