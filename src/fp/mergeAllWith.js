import mergeWith from "lodash-es/mergeWith";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("mergeAllWith", mergeWith);
func.placeholder = placeholder;

export default func;
