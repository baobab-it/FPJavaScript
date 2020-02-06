import size from "lodash-es/size";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("size", size, _falseOptions);
func.placeholder = placeholder;

export default func;
