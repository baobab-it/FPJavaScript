import toArray from "lodash-es/toArray";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("toArray", toArray, _falseOptions);
func.placeholder = placeholder;

export default func;
