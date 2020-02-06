import unset from "lodash-es/unset";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("unset", unset);
func.placeholder = placeholder;

export default func;
