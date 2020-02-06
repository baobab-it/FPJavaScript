import invoke from "lodash-es/invoke";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("invokeArgs", invoke);
func.placeholder = placeholder;

export default func;
