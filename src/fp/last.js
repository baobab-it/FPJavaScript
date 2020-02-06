import last from "lodash-es/last";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("last", last, _falseOptions);
func.placeholder = placeholder;

export default func;
