import stubTrue from "lodash-es/stubTrue";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("stubTrue", stubTrue, _falseOptions);
func.placeholder = placeholder;

export default func;
