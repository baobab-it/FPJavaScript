import countBy from "lodash-es/countBy";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("countBy", countBy);
func.placeholder = placeholder;

export default func;
