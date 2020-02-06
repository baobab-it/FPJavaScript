import isArrayLikeObject from "lodash-es/isArrayLikeObject";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isArrayLikeObject", isArrayLikeObject, _falseOptions);
func.placeholder = placeholder;

export default func;
