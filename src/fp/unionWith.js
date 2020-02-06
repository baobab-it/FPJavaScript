import unionWith from "lodash-es/unionWith";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("unionWith", unionWith);
func.placeholder = placeholder;

export default func;
