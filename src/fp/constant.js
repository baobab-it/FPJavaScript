import constant from "lodash-es/constant";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("constant", constant, _falseOptions);
func.placeholder = placeholder;

export default func;
