import gt from "lodash-es/gt";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("gt", gt);
func.placeholder = placeholder;

export default func;
