import fromPairs from "lodash-es/fromPairs";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("fromPairs", fromPairs);
func.placeholder = placeholder;

export default func;
