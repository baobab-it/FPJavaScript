import difference from "lodash-es/difference";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("difference", difference);
func.placeholder = placeholder;

export default func;
