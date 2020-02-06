import value from "lodash-es/value";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("value", value, _falseOptions);
func.placeholder = placeholder;

export default func;
