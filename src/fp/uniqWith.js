import uniqWith from "lodash-es/uniqWith";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("uniqWith", uniqWith);
func.placeholder = placeholder;

export default func;
