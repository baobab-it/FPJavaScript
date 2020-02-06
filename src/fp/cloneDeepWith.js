import cloneDeepWith from "lodash-es/cloneDeepWith";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("cloneDeepWith", cloneDeepWith);
func.placeholder = placeholder;

export default func;
