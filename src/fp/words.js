import words from "lodash-es/words";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("words", words);
func.placeholder = placeholder;

export default func;
