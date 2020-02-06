import bind from "lodash-es/bind";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("bind", bind);
func.placeholder = placeholder;

export default func;
