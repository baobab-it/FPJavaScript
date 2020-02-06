import indexOf from "lodash-es/indexOf";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("indexOfFrom", indexOf);
func.placeholder = placeholder;

export default func;
