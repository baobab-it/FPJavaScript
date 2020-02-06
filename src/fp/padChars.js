import pad from "lodash-es/pad";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("padChars", pad);
func.placeholder = placeholder;

export default func;
