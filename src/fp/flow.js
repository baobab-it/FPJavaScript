import flow from "lodash-es/flow";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("flow", flow);
func.placeholder = placeholder;

export default func;
