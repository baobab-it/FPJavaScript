import castArray from "lodash-es/castArray";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("castArray", castArray);
func.placeholder = placeholder;

export default func;
