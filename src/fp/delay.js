import delay from "lodash-es/delay";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("delay", delay);
func.placeholder = placeholder;

export default func;
