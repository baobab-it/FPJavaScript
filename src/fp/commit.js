import commit from "lodash-es/commit";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("commit", commit, _falseOptions);
func.placeholder = placeholder;

export default func;
