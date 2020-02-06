import initial from "lodash-es/initial";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("initial", initial, _falseOptions);
func.placeholder = placeholder;

export default func;
