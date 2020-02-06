import slice from "lodash-es/slice";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("slice", slice);
func.placeholder = placeholder;

export default func;
