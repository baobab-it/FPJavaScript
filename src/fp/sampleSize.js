import sampleSize from "lodash-es/sampleSize";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("sampleSize", sampleSize);
func.placeholder = placeholder;

export default func;
