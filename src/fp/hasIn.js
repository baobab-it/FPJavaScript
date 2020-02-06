import hasIn from "lodash-es/hasIn";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("hasIn", hasIn);
func.placeholder = placeholder;

export default func;
