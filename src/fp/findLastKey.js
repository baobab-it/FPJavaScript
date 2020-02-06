import findLastKey from "lodash-es/findLastKey";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("findLastKey", findLastKey);
func.placeholder = placeholder;

export default func;
