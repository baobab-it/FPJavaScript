import keysIn from "lodash-es/keysIn";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("keysIn", keysIn, _falseOptions);
func.placeholder = placeholder;

export default func;
