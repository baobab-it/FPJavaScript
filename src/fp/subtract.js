import subtract from "lodash-es/subtract";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("subtract", subtract);
func.placeholder = placeholder;

export default func;
