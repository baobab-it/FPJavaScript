import map from "lodash-es/map";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("map", map);
func.placeholder = placeholder;

export default func;
