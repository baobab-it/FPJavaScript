import concat from "lodash-es/concat";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("concat", concat);
func.placeholder = placeholder;

export default func;
