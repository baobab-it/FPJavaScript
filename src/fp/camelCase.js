import camelCase from "lodash-es/camelCase";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("camelCase", camelCase, _falseOptions);
func.placeholder = placeholder;

export default func;
