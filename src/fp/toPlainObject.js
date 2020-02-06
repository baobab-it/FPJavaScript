import toPlainObject from "lodash-es/toPlainObject";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("toPlainObject", toPlainObject, _falseOptions);
func.placeholder = placeholder;

export default func;
