import reject from "lodash-es/reject";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("reject", reject);
func.placeholder = placeholder;

export default func;
