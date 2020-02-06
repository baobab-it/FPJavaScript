import at from "lodash-es/at";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("at", at);
func.placeholder = placeholder;

export default func;
