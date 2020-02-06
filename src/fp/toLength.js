import toLength from "lodash-es/toLength";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("toLength", toLength, _falseOptions);
func.placeholder = placeholder;

export default func;
