import intersectionWith from "lodash-es/intersectionWith";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("intersectionWith", intersectionWith);
func.placeholder = placeholder;

export default func;
