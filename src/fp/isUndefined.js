import isUndefined from "lodash-es/isUndefined";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isUndefined", isUndefined, _falseOptions);
func.placeholder = placeholder;

export default func;
