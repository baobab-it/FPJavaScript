import isEqual from "lodash-es/isEqual";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("isEqual", isEqual);
func.placeholder = placeholder;

export default func;
