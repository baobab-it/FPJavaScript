import upperFirst from "lodash-es/upperFirst";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("upperFirst", upperFirst, _falseOptions);
func.placeholder = placeholder;

export default func;
