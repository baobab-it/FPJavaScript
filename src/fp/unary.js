import unary from "lodash-es/unary";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("unary", unary, _falseOptions);
func.placeholder = placeholder;

export default func;
