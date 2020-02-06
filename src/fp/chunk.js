import chunk from "lodash-es/chunk";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("chunk", chunk);
func.placeholder = placeholder;

export default func;
