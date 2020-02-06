import pullAt from "lodash-es/pullAt";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("pullAt", pullAt);
func.placeholder = placeholder;

export default func;
