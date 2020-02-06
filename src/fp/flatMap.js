import flatMap from "lodash-es/flatMap";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("flatMap", flatMap);
func.placeholder = placeholder;

export default func;
