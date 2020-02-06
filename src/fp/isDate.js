import isDate from "lodash-es/isDate";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isDate", isDate, _falseOptions);
func.placeholder = placeholder;

export default func;
