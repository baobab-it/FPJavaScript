import ary from "lodash-es/ary";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("ary", ary);
func.placeholder = placeholder;

export default func;
