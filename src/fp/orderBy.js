import orderBy from "lodash-es/orderBy";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("orderBy", orderBy);
func.placeholder = placeholder;

export default func;
