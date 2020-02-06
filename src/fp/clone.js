import clone from "lodash-es/clone";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("clone", clone, _falseOptions);
func.placeholder = placeholder;

export default func;
