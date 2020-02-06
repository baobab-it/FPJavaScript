import lowerCase from "lodash-es/lowerCase";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("lowerCase", lowerCase, _falseOptions);
func.placeholder = placeholder;

export default func;
