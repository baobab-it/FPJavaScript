import padStart from "lodash-es/padStart";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("padCharsStart", padStart);
func.placeholder = placeholder;

export default func;
