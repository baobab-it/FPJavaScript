import shuffle from "lodash-es/shuffle";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("shuffle", shuffle, _falseOptions);
func.placeholder = placeholder;

export default func;
