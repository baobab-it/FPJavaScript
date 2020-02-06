import defaultsDeep from "lodash-es/defaultsDeep";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("defaultsDeepAll", defaultsDeep);
func.placeholder = placeholder;

export default func;
