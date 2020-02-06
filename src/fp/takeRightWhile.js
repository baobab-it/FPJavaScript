import takeRightWhile from "lodash-es/takeRightWhile";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("takeRightWhile", takeRightWhile);
func.placeholder = placeholder;

export default func;
