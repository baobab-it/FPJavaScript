import unzipWith from "lodash-es/unzipWith";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("unzipWith", unzipWith);
func.placeholder = placeholder;

export default func;
