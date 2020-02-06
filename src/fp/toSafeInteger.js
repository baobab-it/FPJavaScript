import toSafeInteger from "lodash-es/toSafeInteger";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("toSafeInteger", toSafeInteger, _falseOptions);
func.placeholder = placeholder;

export default func;
