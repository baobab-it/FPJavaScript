import toIterator from "lodash-es/toIterator";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("toIterator", toIterator, _falseOptions);
func.placeholder = placeholder;

export default func;
