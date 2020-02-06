import toString from "lodash-es/toString";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("toString", toString, _falseOptions);
func.placeholder = placeholder;

export default func;
