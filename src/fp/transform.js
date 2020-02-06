import transform from "lodash-es/transform";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("transform", transform);
func.placeholder = placeholder;

export default func;
