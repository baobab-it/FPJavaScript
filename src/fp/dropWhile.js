import dropWhile from "lodash-es/dropWhile";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("dropWhile", dropWhile);
func.placeholder = placeholder;

export default func;
