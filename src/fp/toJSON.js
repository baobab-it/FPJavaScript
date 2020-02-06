import toJSON from "lodash-es/toJSON";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("toJSON", toJSON, _falseOptions);
func.placeholder = placeholder;

export default func;
