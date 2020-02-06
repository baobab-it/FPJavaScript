import attempt from "lodash-es/attempt";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("attempt", attempt);
func.placeholder = placeholder;

export default func;
