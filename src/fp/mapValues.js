import mapValues from "lodash-es/mapValues";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("mapValues", mapValues);
func.placeholder = placeholder;

export default func;
