import fill from "lodash-es/fill";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("fill", fill);
func.placeholder = placeholder;

export default func;
