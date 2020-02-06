import wrapperLodash from "lodash-es/wrapperLodash";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("wrapperLodash", wrapperLodash, _falseOptions);
func.placeholder = placeholder;

export default func;
