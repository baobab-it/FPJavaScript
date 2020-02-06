import range from "lodash-es/range";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("rangeStep", range);
func.placeholder = placeholder;

export default func;
