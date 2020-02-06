import update from "lodash-es/update";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("update", update);
func.placeholder = placeholder;

export default func;
