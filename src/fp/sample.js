import sample from "lodash-es/sample";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("sample", sample, _falseOptions);
func.placeholder = placeholder;

export default func;
