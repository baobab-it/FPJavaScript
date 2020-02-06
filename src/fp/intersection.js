import intersection from "lodash-es/intersection";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("intersection", intersection);
func.placeholder = placeholder;

export default func;
