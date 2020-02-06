import zipWith from "lodash-es/zipWith";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("zipWith", zipWith);
func.placeholder = placeholder;

export default func;
