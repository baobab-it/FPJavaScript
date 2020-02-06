import toPairsIn from "lodash-es/toPairsIn";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("toPairsIn", toPairsIn, _falseOptions);
func.placeholder = placeholder;

export default func;
