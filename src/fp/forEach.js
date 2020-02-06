import forEach from "lodash-es/forEach";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("forEach", forEach);
func.placeholder = placeholder;

export default func;
