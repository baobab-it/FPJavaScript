import throttle from "lodash-es/throttle";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("throttle", throttle);
func.placeholder = placeholder;

export default func;
