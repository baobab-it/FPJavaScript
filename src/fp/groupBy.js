import groupBy from "lodash-es/groupBy";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("groupBy", groupBy);
func.placeholder = placeholder;

export default func;
