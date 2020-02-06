import times from "lodash-es/times";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("times", times);
func.placeholder = placeholder;

export default func;
