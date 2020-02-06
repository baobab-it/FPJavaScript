import memoize from "lodash-es/memoize";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("memoize", memoize);
func.placeholder = placeholder;

export default func;
