import some from "lodash-es/some";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("some", some);
func.placeholder = placeholder;

export default func;
