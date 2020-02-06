import invertBy from "lodash-es/invertBy";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("invertBy", invertBy);
func.placeholder = placeholder;

export default func;
