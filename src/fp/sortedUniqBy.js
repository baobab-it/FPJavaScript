import sortedUniqBy from "lodash-es/sortedUniqBy";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("sortedUniqBy", sortedUniqBy);
func.placeholder = placeholder;

export default func;
