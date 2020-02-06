import differenceBy from "lodash-es/differenceBy";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("differenceBy", differenceBy);
func.placeholder = placeholder;

export default func;
