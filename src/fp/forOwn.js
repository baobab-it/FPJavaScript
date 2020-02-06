import forOwn from "lodash-es/forOwn";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("forOwn", forOwn);
func.placeholder = placeholder;

export default func;
