import upperCase from "lodash-es/upperCase";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("upperCase", upperCase, _falseOptions);
func.placeholder = placeholder;

export default func;
