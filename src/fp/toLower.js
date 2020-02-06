import toLower from "lodash-es/toLower";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("toLower", toLower, _falseOptions);
func.placeholder = placeholder;

export default func;
