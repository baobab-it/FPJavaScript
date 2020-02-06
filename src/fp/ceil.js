import ceil from "lodash-es/ceil";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("ceil", ceil);
func.placeholder = placeholder;

export default func;
