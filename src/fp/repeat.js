import repeat from "lodash-es/repeat";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("repeat", repeat);
func.placeholder = placeholder;

export default func;
