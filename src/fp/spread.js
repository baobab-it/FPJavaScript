import spread from "lodash-es/spread";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("spread", spread);
func.placeholder = placeholder;

export default func;
