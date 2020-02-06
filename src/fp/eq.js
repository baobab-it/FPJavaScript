import eq from "lodash-es/eq";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("eq", eq);
func.placeholder = placeholder;

export default func;
