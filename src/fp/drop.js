import drop from "lodash-es/drop";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("drop", drop);
func.placeholder = placeholder;

export default func;
