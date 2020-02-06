import after from "lodash-es/after";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("after", after);
func.placeholder = placeholder;

export default func;
