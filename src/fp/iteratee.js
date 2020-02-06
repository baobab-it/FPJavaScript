import iteratee from "lodash-es/iteratee";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("iteratee", iteratee);
func.placeholder = placeholder;

export default func;
