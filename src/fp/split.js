import split from "lodash-es/split";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("split", split);
func.placeholder = placeholder;

export default func;
