import isSymbol from "lodash-es/isSymbol";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isSymbol", isSymbol, _falseOptions);
func.placeholder = placeholder;

export default func;
