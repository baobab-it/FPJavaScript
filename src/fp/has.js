import has from "lodash-es/has";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("has", has);
func.placeholder = placeholder;

export default func;
