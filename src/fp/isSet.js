import isSet from "lodash-es/isSet";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isSet", isSet, _falseOptions);
func.placeholder = placeholder;

export default func;
