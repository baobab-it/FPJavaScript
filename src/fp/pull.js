import pull from "lodash-es/pull";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("pull", pull);
func.placeholder = placeholder;

export default func;
