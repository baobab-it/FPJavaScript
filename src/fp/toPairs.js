import toPairs from "lodash-es/toPairs";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("toPairs", toPairs, _falseOptions);
func.placeholder = placeholder;

export default func;
