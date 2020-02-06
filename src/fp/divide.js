import divide from "lodash-es/divide";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("divide", divide);
func.placeholder = placeholder;

export default func;
