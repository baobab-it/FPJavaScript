import includes from "lodash-es/includes";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("includes", includes);
func.placeholder = placeholder;

export default func;
