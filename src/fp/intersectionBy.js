import intersectionBy from "lodash-es/intersectionBy";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("intersectionBy", intersectionBy);
func.placeholder = placeholder;

export default func;
