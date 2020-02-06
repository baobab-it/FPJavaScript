import debounce from "lodash-es/debounce";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("debounce", debounce);
func.placeholder = placeholder;

export default func;
