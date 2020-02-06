import trim from "lodash-es/trim";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("trimChars", trim);
func.placeholder = placeholder;

export default func;
