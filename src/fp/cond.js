import cond from "lodash-es/cond";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("cond", cond, _falseOptions);
func.placeholder = placeholder;

export default func;
