import methodOf from "lodash-es/methodOf";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("methodOf", methodOf);
func.placeholder = placeholder;

export default func;
