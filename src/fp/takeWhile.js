import takeWhile from "lodash-es/takeWhile";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("takeWhile", takeWhile);
func.placeholder = placeholder;

export default func;
