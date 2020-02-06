import assignWith from "lodash-es/assignWith";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("assignWith", assignWith);
func.placeholder = placeholder;

export default func;
