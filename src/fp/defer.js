import defer from "lodash-es/defer";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("defer", defer, _falseOptions);
func.placeholder = placeholder;

export default func;
