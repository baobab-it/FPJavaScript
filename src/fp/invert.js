import invert from "lodash-es/invert";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("invert", invert);
func.placeholder = placeholder;

export default func;
