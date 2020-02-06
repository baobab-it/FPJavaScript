import thru from "lodash-es/thru";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("thru", thru);
func.placeholder = placeholder;

export default func;
