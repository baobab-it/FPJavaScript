import add from "lodash-es/add";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("add", add);
func.placeholder = placeholder;

export default func;
