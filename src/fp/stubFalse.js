import stubFalse from "lodash-es/stubFalse";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("stubFalse", stubFalse, _falseOptions);
func.placeholder = placeholder;

export default func;
