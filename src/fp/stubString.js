import stubString from "lodash-es/stubString";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("stubString", stubString, _falseOptions);
func.placeholder = placeholder;

export default func;
