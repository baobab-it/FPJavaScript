import stubObject from "lodash-es/stubObject";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("stubObject", stubObject, _falseOptions);
func.placeholder = placeholder;

export default func;
