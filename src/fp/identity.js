import identity from "lodash-es/identity";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("identity", identity, _falseOptions);
func.placeholder = placeholder;

export default func;
