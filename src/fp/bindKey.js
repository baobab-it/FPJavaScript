import bindKey from "lodash-es/bindKey";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("bindKey", bindKey);
func.placeholder = placeholder;

export default func;
