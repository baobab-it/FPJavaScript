import isMatchWith from "lodash-es/isMatchWith";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("isMatchWith", isMatchWith);
func.placeholder = placeholder;

export default func;
