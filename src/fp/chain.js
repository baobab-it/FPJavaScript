import chain from "lodash-es/chain";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("chain", chain, _falseOptions);
func.placeholder = placeholder;

export default func;
