import isArrayLike from "lodash-es/isArrayLike";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isArrayLike", isArrayLike, _falseOptions);
func.placeholder = placeholder;

export default func;
