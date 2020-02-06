import uniq from "lodash-es/uniq";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("uniq", uniq, _falseOptions);
func.placeholder = placeholder;

export default func;
