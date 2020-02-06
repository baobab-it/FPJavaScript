import plant from "lodash-es/plant";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("plant", plant, _falseOptions);
func.placeholder = placeholder;

export default func;
