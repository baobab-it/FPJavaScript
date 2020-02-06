import lte from "lodash-es/lte";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("lte", lte);
func.placeholder = placeholder;

export default func;
