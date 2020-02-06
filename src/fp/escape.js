import escape from "lodash-es/escape";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("escape", escape, _falseOptions);
func.placeholder = placeholder;

export default func;
