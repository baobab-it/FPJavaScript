import partition from "lodash-es/partition";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("partition", partition);
func.placeholder = placeholder;

export default func;
