import wrapperChain from "lodash-es/wrapperChain";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("wrapperChain", wrapperChain, _falseOptions);
func.placeholder = placeholder;

export default func;
