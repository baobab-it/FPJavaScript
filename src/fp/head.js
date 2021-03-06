import head from "lodash-es/head";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("head", head, _falseOptions);
func.placeholder = placeholder;

export default func;
