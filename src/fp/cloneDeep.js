import cloneDeep from "lodash-es/cloneDeep";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("cloneDeep", cloneDeep, _falseOptions);
func.placeholder = placeholder;

export default func;
