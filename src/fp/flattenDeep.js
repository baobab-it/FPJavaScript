import flattenDeep from "lodash-es/flattenDeep";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("flattenDeep", flattenDeep, _falseOptions);
func.placeholder = placeholder;

export default func;
