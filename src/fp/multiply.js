import multiply from "lodash-es/multiply";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("multiply", multiply);
func.placeholder = placeholder;

export default func;
