import wrapperValue from "lodash-es/wrapperValue";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("wrapperValue", wrapperValue, _falseOptions);
func.placeholder = placeholder;

export default func;
