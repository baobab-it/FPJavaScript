import isError from "lodash-es/isError";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isError", isError, _falseOptions);
func.placeholder = placeholder;

export default func;
