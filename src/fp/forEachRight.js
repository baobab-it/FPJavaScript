import forEachRight from "lodash-es/forEachRight";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("forEachRight", forEachRight);
func.placeholder = placeholder;

export default func;
