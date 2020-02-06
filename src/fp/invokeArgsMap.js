import invokeMap from "lodash-es/invokeMap";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("invokeArgsMap", invokeMap);
func.placeholder = placeholder;

export default func;
