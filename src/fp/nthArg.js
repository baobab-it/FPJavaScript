import nthArg from "lodash-es/nthArg";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("nthArg", nthArg);
func.placeholder = placeholder;

export default func;
