import tail from "lodash-es/tail";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("tail", tail, _falseOptions);
func.placeholder = placeholder;

export default func;
