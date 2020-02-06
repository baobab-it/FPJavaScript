import findKey from "lodash-es/findKey";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("findKey", findKey);
func.placeholder = placeholder;

export default func;
