import stubArray from "lodash-es/stubArray";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("stubArray", stubArray, _falseOptions);
func.placeholder = placeholder;

export default func;
