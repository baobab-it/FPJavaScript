import convert from "./convert.js";
import placeholder from "./placeholder.js";
import get from "lodash-es/get";

var func = convert("get", get);
func.placeholder = placeholder;

export default func;
