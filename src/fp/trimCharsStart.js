import trimStart from "lodash-es/trimStart";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("trimCharsStart", trimStart, _falseOptions);
func.placeholder = placeholder;

export default func;
