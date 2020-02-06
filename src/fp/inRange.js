import inRange from "lodash-es/inRange";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("inRange", inRange);
func.placeholder = placeholder;

export default func;
