import gte from "lodash-es/gte";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("gte", gte);
func.placeholder = placeholder;

export default func;
