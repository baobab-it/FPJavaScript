import conformsTo from "lodash-es/conformsTo";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("conformsTo", conformsTo);
func.placeholder = placeholder;

export default func;
