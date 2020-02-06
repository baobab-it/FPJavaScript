import kebabCase from "lodash-es/kebabCase";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("kebabCase", kebabCase, _falseOptions);
func.placeholder = placeholder;

export default func;
