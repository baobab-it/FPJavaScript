import now from "lodash-es/now";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("now", now, _falseOptions);
func.placeholder = placeholder;

export default func;
