import isLength from "lodash-es/isLength";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isLength", isLength, _falseOptions);
func.placeholder = placeholder;

export default func;
