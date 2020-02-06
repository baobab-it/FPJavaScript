import without from "lodash-es/without";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("without", without);
func.placeholder = placeholder;

export default func;
