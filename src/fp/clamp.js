import clamp from "lodash-es/clamp";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("clamp", clamp);
func.placeholder = placeholder;

export default func;
