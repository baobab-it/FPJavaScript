import isNull from "lodash-es/isNull";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isNull", isNull, _falseOptions);
func.placeholder = placeholder;

export default func;
