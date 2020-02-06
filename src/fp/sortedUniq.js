import sortedUniq from "lodash-es/sortedUniq";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("sortedUniq", sortedUniq, _falseOptions);
func.placeholder = placeholder;

export default func;
