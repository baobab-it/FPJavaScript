import keys from "lodash-es/keys";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("keys", keys, _falseOptions);
func.placeholder = placeholder;

export default func;
