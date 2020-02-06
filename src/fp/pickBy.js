import pickBy from "lodash-es/pickBy";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("pickBy", pickBy);
func.placeholder = placeholder;

export default func;
