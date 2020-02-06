import flatMapDeep from "lodash-es/flatMapDeep";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("flatMapDeep", flatMapDeep);
func.placeholder = placeholder;

export default func;
