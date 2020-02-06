import result from "lodash-es/result";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("result", result);
func.placeholder = placeholder;

export default func;
