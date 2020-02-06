import over from "lodash-es/over";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("over", over);
func.placeholder = placeholder;

export default func;
