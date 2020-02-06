import isMatch from "lodash-es/isMatch";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("isMatch", isMatch);
func.placeholder = placeholder;

export default func;
