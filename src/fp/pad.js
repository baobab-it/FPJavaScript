import pad from "lodash-es/pad";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("pad", pad);
func.placeholder = placeholder;

export default func;
