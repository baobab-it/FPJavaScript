import updateWith from "lodash-es/updateWith";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("updateWith", updateWith);
func.placeholder = placeholder;

export default func;
