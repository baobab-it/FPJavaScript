import sumBy from "lodash-es/sumBy";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("sumBy", sumBy);
func.placeholder = placeholder;

export default func;
