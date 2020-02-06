import noop from "lodash-es/noop";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("noop", noop, _falseOptions);
func.placeholder = placeholder;

export default func;
