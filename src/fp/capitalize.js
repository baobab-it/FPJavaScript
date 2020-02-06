import capitalize from "lodash-es/capitalize";
import convert from "./convert.js";
import placeholder from "./placeholder.js";
import _falseOptions from "./_falseOptions.js";

var func = convert("capitalize", capitalize, _falseOptions);
func.placeholder = placeholder;

export default func;
