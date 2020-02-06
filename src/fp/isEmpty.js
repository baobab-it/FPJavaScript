import isEmpty from "lodash-es/isEmpty";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isEmpty", isEmpty, _falseOptions);
func.placeholder = placeholder;

export default func;
