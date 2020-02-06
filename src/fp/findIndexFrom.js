import findIndex from "lodash-es/findIndex";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("findIndexFrom", findIndex);
func.placeholder = placeholder;

export default func;
