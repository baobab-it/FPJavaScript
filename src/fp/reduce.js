import reduce from "lodash-es/reduce";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("reduce", reduce);
func.placeholder = placeholder;

export default func;
