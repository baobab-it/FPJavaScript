import mean from "lodash-es/mean";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("mean", mean, _falseOptions);
func.placeholder = placeholder;

export default func;
