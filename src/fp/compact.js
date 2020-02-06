import compact from "lodash-es/compact";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("compact", compact, _falseOptions);
func.placeholder = placeholder;

export default func;
