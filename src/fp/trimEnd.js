import trimEnd from "lodash-es/trimEnd";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("trimEnd", trimEnd);
func.placeholder = placeholder;

export default func;
