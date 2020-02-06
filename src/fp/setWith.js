import setWith from "lodash-es/setWith";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("setWith", setWith);
func.placeholder = placeholder;

export default func;
