import max from "lodash-es/max";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("max", max, _falseOptions);
func.placeholder = placeholder;

export default func;
