import wrapperAt from "lodash-es/wrapperAt";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("wrapperAt", wrapperAt, _falseOptions);
func.placeholder = placeholder;

export default func;
