import snakeCase from "lodash-es/snakeCase";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("snakeCase", snakeCase, _falseOptions);
func.placeholder = placeholder;

export default func;
