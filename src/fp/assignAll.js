import assign from "lodash-es/assign";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("assignAll", assign);
func.placeholder = placeholder;

export default func;
