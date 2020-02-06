import lowerFirst from "lodash-es/lowerFirst";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("lowerFirst", lowerFirst, _falseOptions);
func.placeholder = placeholder;

export default func;
