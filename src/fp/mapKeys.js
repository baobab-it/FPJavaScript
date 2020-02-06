import mapKeys from "lodash-es/mapKeys";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("mapKeys", mapKeys);
func.placeholder = placeholder;

export default func;
