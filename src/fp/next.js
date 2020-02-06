import next from "lodash-es/next";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("next", next, _falseOptions);
func.placeholder = placeholder;

export default func;
