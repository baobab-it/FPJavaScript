import meanBy from "lodash-es/meanBy";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("meanBy", meanBy);
func.placeholder = placeholder;

export default func;
