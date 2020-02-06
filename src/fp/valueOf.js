import valueOf from "lodash-es/valueOf";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("valueOf", valueOf, _falseOptions);
func.placeholder = placeholder;

export default func;
