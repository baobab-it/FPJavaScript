import flip from "lodash-es/flip";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("flip", flip, _falseOptions);
func.placeholder = placeholder;

export default func;
