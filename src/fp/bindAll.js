import bindAll from "lodash-es/bindAll";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("bindAll", bindAll);
func.placeholder = placeholder;

export default func;
