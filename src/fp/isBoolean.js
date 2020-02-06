import isBoolean from "lodash-es/isBoolean";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isBoolean", isBoolean, _falseOptions);
func.placeholder = placeholder;

export default func;
