import once from "lodash-es/once";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("once", once, _falseOptions);
func.placeholder = placeholder;

export default func;
