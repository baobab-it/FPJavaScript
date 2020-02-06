import sum from "lodash-es/sum";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("sum", sum, _falseOptions);
func.placeholder = placeholder;

export default func;
