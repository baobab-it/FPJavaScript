import isArguments from "lodash-es/isArguments";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isArguments", isArguments, _falseOptions);
func.placeholder = placeholder;

export default func;
