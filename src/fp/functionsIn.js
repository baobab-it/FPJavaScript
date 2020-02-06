import functionsIn from "lodash-es/functionsIn";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("functionsIn", functionsIn, _falseOptions);
func.placeholder = placeholder;

export default func;
