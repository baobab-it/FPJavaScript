import negate from "lodash-es/negate";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("negate", negate, _falseOptions);
func.placeholder = placeholder;

export default func;
