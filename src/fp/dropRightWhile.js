import dropRightWhile from "lodash-es/dropRightWhile";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("dropRightWhile", dropRightWhile);
func.placeholder = placeholder;

export default func;
