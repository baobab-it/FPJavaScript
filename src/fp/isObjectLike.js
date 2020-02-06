import isObjectLike from "lodash-es/isObjectLike";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isObjectLike", isObjectLike, _falseOptions);
func.placeholder = placeholder;

export default func;
