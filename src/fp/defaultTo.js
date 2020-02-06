import defaultTo from "lodash-es/defaultTo";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("defaultTo", defaultTo);
func.placeholder = placeholder;

export default func;
