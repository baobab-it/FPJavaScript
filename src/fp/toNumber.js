import toNumber from "lodash-es/toNumber";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("toNumber", toNumber, _falseOptions);
func.placeholder = placeholder;

export default func;
